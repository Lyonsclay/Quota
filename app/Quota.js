import React, { Component } from 'react'
import {
  View,
  Button,
  StyleSheet,
} from 'react-native'
import WisdomMessages from './WisdomMessages'
import positives from '../public/positives'

class Quota extends Component {
  constructor() {
    super()

    this.state = {
      positives,
      positiveLength: positives.length,
      messages: ['fun', 'life', 'good']
    }
  }

  _getMessage = () => {
    const index = Math.floor(Math.random() * (this.state.positiveLength))
    return positives[index]
  }

  _shuffle = () => {
    const messages = this.state.messages.map(() => this._getMessage())

    this.setState(messages)
  }

  render() {
    return (
      <View style={styles.view}>
        <Button
          title="Shuffle"
          onPress={this._shuffle}
          style={styles.button}
      />
        <WisdomMessages messages={this.state.messages} />
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
