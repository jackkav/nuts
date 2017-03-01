import React, { Component, PropTypes } from 'react'
import {
    Text, TextInput,
    View,
} from 'react-native'
import debounce from 'lodash/debounce'

export class ListItem extends Component {
  static propTypes = {
    episodeNumber: PropTypes.string,
    title: PropTypes.string,
    episodeName: PropTypes.string,
  }
  static defaultProps = {
    episodeNumber: 'episodeNumber',
    title: 'Title',
    episodeName: 'episodeName',
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 5 }}>
        <View style={{ width: 70, height: 50, marginRight: 10, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ color: 'grey' }}>{this.props.episodeNumber}</Text>
          <Text>{this.props.title}</Text>
          <Text style={{ color: 'grey' }}>{this.props.episodeName}</Text>
        </View>
      </View>
    )
  }
}

const fetchQuery = debounce((q) => {
  fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) =>
         responseJson.movies.filter(item =>
         JSON.stringify(item).toLowerCase().indexOf(q.toLowerCase()) > -1))
      .catch((error) => {
        console.error(error)
      })
}, 500)

export class SearchBar extends Component {
  postSearch(text) {
    if (text.length > 3) {
      fetchQuery(text)
      this.setState({ text })
            // submit search to API

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
    )
  }
}
