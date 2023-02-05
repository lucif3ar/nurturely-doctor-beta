import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import { Colors } from '../../constants/color';

import PatientTabList from './PatientTabList';
import ExpanedAppCard from './ExpanedAppCard';

export default Body = ({ selectedTab, setSelectedTab }) => {
  if (selectedTab === 'Graphs') {
    return (
      <View style={styles.container}>
        <PatientTabList
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Text style={styles.heading}>No Graphs to display!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PatientTabList
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <ScrollView>
        <ExpanedAppCard />
        <ExpanedAppCard />
        <ExpanedAppCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.white,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary400,
    textAlign: 'center',
    marginTop: 50,
  },
});
