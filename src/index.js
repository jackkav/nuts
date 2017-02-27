/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
export default class nuts extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Blink style={styles.welcome} text='Welcome to React Native!' />
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <Blink style={styles.welcome} text='To get started, edit index.android.js' />
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} >
          <Blink style={styles.welcome} text='Double tap R on your keyboard to reload' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

