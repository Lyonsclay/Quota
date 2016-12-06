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



const titles = {
  positives: ['I BREATHE IN...', 'I WELCOME...', 'I ANCHOR & EMPOWER...'],
  negatives: ['I REJECT...', 'I RELEASE...', 'I BREATHE OUT ANY & ALL...'],
  affirmations: ['TRUTH IS EVERYTHING!', 'UPLIFTING VIBRATIONS', 'THIS IS ME!']
}

const ri = () => Math.floor(Math.random() * 3)

class Quota extends Component {
  constructor() {
    super()

    this.state = {
      listLength: 0,
      messages: ['', '', ''],
      list: [],
      title: 'MY INSPIRATIONS'
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
    
    if (titles[listName] !== this.state.title) {
      this.setState(
        {
          list: lists[listName],
          listLength: lists[listName].length,
          title: titles[listName][ri()],

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
        source={require('../public/images/sky_dome.jpg')}
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
    backgroundColor: 'rgba(250, 240, 240, 0.0)',
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
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .7)',
    backgroundColor: 'rgba(255, 255, 255, .4)',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10,
  },
  messages: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  listMenu: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    paddingBottom: 70
  },
})

export default Quota
