/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, TextInput,
  View, ScrollView,
} from 'react-native';
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

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
class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        <Text>My name is</Text>
      </View>
    );
  }
}
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 0.1, backgroundColor: 'powderblue' }}>
          <Blink style={styles.welcome} text='Search Bar' />
        </View>
    );
  }
}
export default class nuts extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        <ScrollView style={{ flex: 1, backgroundColor: 'skyblue' }}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ScrollView>
        {/*<View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Blink style={styles.welcome} text='Welcome to React Native!' />
        </View>
        <ScrollView>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <Blink style={styles.welcome} text='To get started, type below' />
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} >
          <PizzaTranslator style={styles.welcome} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
        </View>
        </ScrollView>*/}
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

