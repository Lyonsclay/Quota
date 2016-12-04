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
    fontFamily: 'Times New Roman',
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 20,
    width: 300,
    color: 'rgba(0, 0, 0, .7)',
  }
})

export default Messages
