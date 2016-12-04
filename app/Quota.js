import React, { Component } from 'react'
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  LayoutAnimation,
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
      title: 'Reflect on Joy'
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

    return messages.sort((a, b) => a.length - b.length)
  }

  _shuffle = () => {
    const messages = this._getNewMessages()
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
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
      <Image
        source={require('../public/images/yosemite.jpg')}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text}>
              {this.state.title}
            </Text>
          </View>
          <View style={styles.messages}>
            <Messages messages={this.state.messages} />
          </View>
          <View style={styles.listMenu}>
            <ListMenu
              setList={this._setList}
            />
          </View>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: 'rgba(250, 240, 240, 0.1)',
    alignSelf: 'stretch',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .7)',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10,
  },
  messages: {
    flex: 1,
    justifyContent: 'center',
  },
  listMenu: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    paddingBottom: 70,
  },
})

export default Quota
