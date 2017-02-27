import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, TextInput,
  View, ScrollView,
} from 'react-native';


class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 5 }}>
        <View style={{ width: 70, height: 50, marginRight: 10, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ color: 'grey' }}>{this.props.episodeNumber || '1x1'}</Text>
          <Text>{this.props.title || 'Title'}</Text>
          <Text style={{ color: 'grey' }}>{this.props.episodeName || ''}</Text>
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
export default class nuts extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    fetch('https://demonic-persistance.herokuapp.com/api/shows')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ items: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  showList() {
    return this.state.items.map(item => {
      return <ListItem
        key={item.magnet}
        title={item.title}
        episodeNumber={item.episode}
         />
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        <ScrollView>
          {this.showList()}
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

