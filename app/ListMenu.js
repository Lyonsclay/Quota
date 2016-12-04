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
        color="rgba(0, 0, 0, .5)"
      />
    </View>
    <View style={styles.button}>
      <Button
        title="Exhale"
        onPress={() => setList('negatives')}
        color="rgba(0, 0, 0, .5)"
      />
    </View>
    <View style={styles.button}>
      <Button
        title="Truths"
        onPress={() => setList('affirmations')}
        color="rgba(0, 0, 0, .5)"
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'rgba(0, 2, 2, .2)',
    borderRadius: 6,
  },
})

export default ListMenu
