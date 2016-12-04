import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native'

const ListMenu = ({setList}) => (
  <View style={styles.view}>
    <Button
      title="Inhale"
      onPress={() => setList('positives')}
    />
    <Button
      title="Exhale"
      onPress={() => setList('negatives')}
    />
    <Button
      title="Truths"
      onPress={() => setList('affirmations')}
    />
  </View>
)

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
  text: {
    height: 20,
  }
})

export default ListMenu
