import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const WisdomMessages = ({messages}) => (
  <View style={styles.view}>
    <Text>{messages[0]}</Text>
    <Text>{messages[1]}</Text>
    <Text>{messages[2]}</Text>
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})

export default WisdomMessages
