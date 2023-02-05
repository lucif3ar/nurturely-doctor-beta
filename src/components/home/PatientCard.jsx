import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../constants/color';

import CustomButton from '../ui/CustomButton';

export default PatientCard = ({ user }) => {
  const navigation = useNavigation();

  const dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${user.phone}`;
    } else {
      phoneNumber = `telprompt:${user.phone}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/doctor-profile.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.heading}>{user.name}</Text>
          <View style={styles.icons}>
            <Ionicons
              name="call"
              size={20}
              color={Colors.white}
              style={styles.icon}
              onPress={() => dialCall()}
            />
            <Ionicons
              name="mail"
              size={20}
              color={Colors.white}
              style={styles.icon}
              onPress={() =>
                Linking.openURL(
                  `mailto:${user.email}?subject=NurturelyDoctor&body=Greetings`
                )
              }
            />
          </View>
        </View>
        <View style={styles.dobContainer}>
          <Text style={styles.subHeading}>Age:</Text>
          <Text style={styles.heading}>3 M</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          title="View Details"
          backgroundColor={Colors.accent500}
          textColor={Colors.white}
          onPress={() => {
            navigation.navigate('PatientDetails');
          }}
        />
        <CustomButton
          title="Remove Patient"
          backgroundColor={Colors.white}
          textColor={Colors.primary500}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    marginVertical: 12,
    borderRadius: 16,
    padding: 8,
  },
  details: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    padding: 8,
  },
  infoContainer: {
    flex: 3,
    padding: 8,
  },
  dobContainer: {
    flex: 1,
    padding: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    color: Colors.grey,
    fontWeight: '500',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 4,
  },
  icon: {
    color: Colors.primary400,
    marginRight: 16,
  },
});
