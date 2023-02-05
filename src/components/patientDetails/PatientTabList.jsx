import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/color';

export default PatientTabList = ({ selectedTab, setSelectedTab }) => {
  const tabList = ['Appointments', 'Graphs'];

  return (
    <View style={styles.tabContainer}>
      {tabList.map((tab) => {
        let color = Colors.darkGrey;
        let bgColor = Colors.white;
        if (tab === selectedTab) {
          color = Colors.white;
          bgColor = Colors.primary500;
        }
        return (
          <Pressable
            key={tab}
            style={[styles.tabButton, { backgroundColor: bgColor }]}
            onPress={() => {
              setSelectedTab(tab);
            }}
          >
            <Text style={[styles.tabText, { color: color }]}>{tab}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
