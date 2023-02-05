import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';

import { Colors } from '../../constants/color';

import PatientCard from './PatientCard';

export default function PatientList() {
  const users = useSelector((state) => state.users);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search by Toddler name...</Text>
      <ScrollView>
        {users.map((user) => {
          return <PatientCard key={user.id} user={user} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    color: Colors.primary400,
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: Colors.grey,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: Colors.primary400,
  },
});
