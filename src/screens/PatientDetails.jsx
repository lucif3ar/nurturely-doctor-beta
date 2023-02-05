import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Body from '../components/patientDetails/Body';
import Header from '../components/patientDetails/Header';

import { Colors } from '../constants/color';

export default PatientDetails = () => {
  const [selectedTab, setSelectedTab] = useState('Appointments');

  return (
    <View style={styles.container}>
      <Header />
      <Body selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
