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
      <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 5 }}>
        <View style={{ width: 70, height: 50, marginRight: 10, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ color: 'grey' }}>{this.props.episodeNumber||'1x1'}</Text>
          <Text>{this.props.title||'Title'}</Text>
          <Text style={{ color: 'grey' }}>{this.props.episodeName||'Episode name'}</Text>
        </View>
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
      <View style={{ flex: 0.05, padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to search!"
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    );
  }
}
  function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson.movies))
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
export default class nuts extends Component {
  constructor(props) {
    super(props);
    const movies = getMoviesFromApiAsync()
    this.state={movies}
    //TODO how to set a title from this object?
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        <ScrollView>
          <ListItem title='star wars'/>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ScrollView>
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

