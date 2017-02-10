import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Messages = ({messages}) => (
  <View style={styles.view}>
    <Text style={styles.text}>{messages[0]}</Text>
    <Text style={styles.text}>{messages[1]}</Text>
    <Text style={styles.text}>{messages[2]}</Text>
  </View>
)

const styles = StyleSheet.create({
  view: {
  },
  text: {
    fontFamily: 'Times',
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 27,
    width: 300,
    color: 'rgba(10, 40, 70, 0.8)',
  }
})

export default Messages
