import { StyleSheet, View } from 'react-native'
import React from 'react'

import Spinner from 'react-native-loading-spinner-overlay';

import { Colors } from '../../constants/color'

export default function LoadingIndicator({loadingContent}) {
  return (
    <View style={styles.loadingContainer}>
        <Spinner
          color={Colors.primary500}
          visible={true}
          textContent={loadingContent}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
  )
}

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
})