import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'

const {height, width} = Dimensions.get('window')

const ListMenu = ({setList}) => (
  <View style={styles.view}>
    <View style={styles.button}>
      <Button
        title="Inhale"
        onPress={() => setList('positives')}
        color="black"
      />
    </View>
    <View style={styles.button}>
      <Button
        title="Exhale"
        onPress={() => setList('negatives')}
        color="black"
      />
    </View>
    <View style={styles.button}>
      <Button
        title="Truths"
        onPress={() => setList('affirmations')}
        color="black"
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width
  },
  button: {
    backgroundColor: 'teal',
    borderWidth: 4,
    borderColor: 'teal',
    borderRadius: 6,
  },
})

export default ListMenu
