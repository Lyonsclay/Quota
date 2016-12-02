import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class WisdomMessages extends Component {
  constructor(props) {
    super(props)

    this.state = { messages: props.messages }
  }

  shouldComponentUpdate(nextProps) {
    let update = false
    if (nextProps.messages !== this.props.messages) {
     update = true
    }

    return update
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>{this.state.messages[0]}</Text>
        <Text>{this.props.messages[1]}</Text>
        <Text>{this.props.messages[2]}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})

export default WisdomMessages
