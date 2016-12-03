import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Messages = ({messages}) => (
  <View >
    <Text style={styles.text}>{messages[0]}</Text>
    <Text style={styles.text}>{messages[1]}</Text>
    <Text style={styles.text}>{messages[2]}</Text>
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    height: 20,
  }
})

export default Messages
