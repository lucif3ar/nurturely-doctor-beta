import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from '../../constants/color';

export default Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.profileImage}
        source={require('../../assets/images/doctor-profile.jpg')}
        resizeMode="contain"
      ></Image>
      <Text style={styles.heading}>Glen Dsouza</Text>
      <Text style={styles.subHeading}>3 months | Male</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="call" color={Colors.white} size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="chatbox" color={Colors.white} size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    marginVertical: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginVertical: 4,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.grey,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 30,
    backgroundColor: Colors.primary400,
  },
});
