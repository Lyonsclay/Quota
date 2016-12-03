import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native'
import WisdomMessages from './WisdomMessages'
import positives from '../public/positives'

class Quota extends Component {
  constructor() {
    super()

    this.state = {
      positivesLength: positives.length,
      messages: ['', '', ''],
    }
  }

  componentDidMount() {
    this.setState({
      messages: this._getNewMessages()
    })
  }

  _getNewMessages = () => {
    const length = this.state.positivesLength
    const index = () => Math.floor(Math.random() * length)
    const messages = [0, 1, 2].map(index).map(i => positives[i])

    // Check for duplicate messages.
    if (messages.reduce((a, message) => a.set(message), new Map()).size < 3) {
      this._getNewMessages()
    }

    return messages
  }

  _shuffle = () => {
    this.setState({
      messages: this._getNewMessages()
    })
  }

  render() {
    return (
      <View style={styles.view}>
        <WisdomMessages messages={this.state.messages} />
        <Button
          title="Shuffle"
          onPress={this._shuffle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',

  }
})

export default Quota
