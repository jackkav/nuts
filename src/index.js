import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, TextInput,
  View, ScrollView,
  ActivityIndicator,
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
          <Text style={{ color: 'grey' }}>{this.props.episodeNumber || ''}</Text>
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
  postSearch(text){
    if(text.length>3){
      this.setState({ text:text })
    }
  }
  render() {
    return (
      <View style={{ flex: 0.05, padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to search!"
          onChangeText={(text) => this.postSearch(text)}
        />
      </View>
    );
  }
}
export default class nuts extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loading: false };
  }
  componentDidMount() {
    this.state.loading=true
    fetch('https://demonic-persistance.herokuapp.com/api/showTitles')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ items: responseJson })
          this.state.loading=false
      })
      .catch((error) => {
        this.state.loading=false
        console.error(error);
      });
  }
  showList() {
    if(!this.state.loading)return <ActivityIndicator animating color="black" size="large" />
    return this.state.items.map(item => {
      return <ListItem
        key={item}
        title={item}
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
