import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native'
import Messages from './Messages'
import ListMenu from './ListMenu'
import positives from '../public/positives'
import negatives from '../public/negatives'
import affirmations from '../public/affirmations'

const lists = {
  positives,
  negatives,
  affirmations
}

const title = {
  positives: 'I breathe in, welcome, anchor and empower:',
  negatives: 'I reject, release and breathe out any and all:',
  affirmations: 'These are my truths:'
}

class Quota extends Component {
  constructor() {
    super()

    this.state = {
      listLength: 0,
      messages: ['', '', ''],
      list: [],
      title: 'Welcome'
    }
  }

  _getNewMessages = () => {
    const { list, listLength } = this.state
    const index = () => Math.floor(Math.random() * listLength)
    const messages = [0, 1, 2].map(index).map(i => list[i])

    // Check for duplicate messages.
    const duplicates = messages.reduce((a, message) => a.set(message), new Map()).size < 3
    if (duplicates && this.state.list.length) {
      return this._getNewMessages()
    }

    return messages
  }

  _shuffle = () => {
    const messages = this._getNewMessages()

    this.setState({
      messages,
    })
  }

  _setList = (listName) => {
    if (title[listName] !== this.state.title) {
      this.setState(
        {
          list: lists[listName],
          listLength: lists[listName].length,
          title: title[listName],
        },
        this._shuffle
      )
    } else {
      this._shuffle()
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.title}>
          <Text>
            {this.state.title}
          </Text>
        </View>
        <View style={styles.message}>
          <Messages messages={this.state.messages} />
        </View>
        <View style={styles.button}>
          <Button
            title="Shuffle"
            onPress={this._shuffle}
            color="black"
          />
        </View>
        <View>
          <ListMenu
            setList={this._setList}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    flex: 3,
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
  },
  message: {
    flex: 3,
    justifyContent: 'center',
    height: 200,
  }
})

export default Quota
