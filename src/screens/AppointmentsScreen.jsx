import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

import Header from '../components/appointments/Header';
import AppointmentList from '../components/appointments/AppointmentList';

import { Colors } from '../constants/color';

export default ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Today');

  return (
    <View style={styles.container}>
      <Header selectedTab={selectedTab} />
      <AppointmentList
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
