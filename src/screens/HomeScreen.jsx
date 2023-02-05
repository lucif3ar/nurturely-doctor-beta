import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { getDoctorById } from '../services/apis/queries/doctor';
import { Colors } from '../constants/color';
import { doctorActions } from '../store/doctor';
import { appointmentActions } from '../store/appointment';
import { userActions } from '../store/user';

import Header from '../components/home/Header';
import PatientList from '../components/home/PatientList';
import LoadingIndicator from '../components/ui/LoadingIndicator';

export default HomeScreen = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = React.useState(false);
  const [myClientID, setMyClientID] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('myClientID').then((myClientID) => {
      setMyClientID(myClientID);
    });
  }, []);

  const { data, loading, error } = useQuery(getDoctorById, {
    variables: { id: myClientID },
    skip,
    onCompleted: (data) => {
      dispatch(
        appointmentActions.setAppointments(data.doctor_by_pk.appointments)
      );
      dispatch(userActions.setUsers(data.doctor_by_pk.users))
      dispatch(doctorActions.setDoctor(data.doctor_by_pk));
    },
  });

  useEffect(() => {
    if (!loading && !data) setSkip(true);
  }, [data, loading]);

  if (loading) {
    return (
      <LoadingIndicator loadingContent="Getting the App ready!"/>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An unexpected Error Occured</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <PatientList />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerTextStyle: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
