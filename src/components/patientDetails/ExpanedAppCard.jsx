import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/color';

import CustomButton from '../ui/CustomButton';

export default ExpanedAppCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.date}>
          <Text style={styles.heading}>15 Jan</Text>
          <Text style={styles.subHeading}>Saturday</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.heading}>General Check-up</Text>
          <Text style={styles.subHeading}>Monthly Check-up for Glen.</Text>
        </View>
      </View>
      <View style={styles.documentContainer}>
        <Text style={styles.heading}>Documents:</Text>
        <View style={styles.document}>
          <View style={styles.dateCard}>
            <Text style={styles.subHeading}>16 Jan</Text>
          </View>
          <View style={styles.docCard}>
            <Text style={styles.subHeading}>DoctorPrescription.jpg</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.subHeading}>Doctor</Text>
          </View>
        </View>
        <View style={styles.document}>
          <View style={styles.dateCard}>
            <Text style={styles.subHeading}>17 Jan</Text>
          </View>
          <View style={styles.docCard}>
            <Text style={styles.subHeading}>PatientReport.pdf</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.subHeading}>Patient</Text>
          </View>
        </View>
      </View>
      <CustomButton
        title="Upload Document"
        onPress={() => {}}
        textColor={Colors.white}
        backgroundColor={Colors.accent500}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.grey,
  },
  date: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    flex: 3,
    justifyContent: 'center',
  },
  document: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  dateCard: {
    flex: 1,
    backgroundColor: Colors.primary400,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    padding: 4,
  },
  docCard: {
    flex: 3,
    backgroundColor: Colors.primary400,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  statusCard: {
    flex: 1,
    backgroundColor: Colors.primary400,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});
