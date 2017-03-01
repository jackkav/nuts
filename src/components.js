import React, { Component, PropTypes } from 'react'
import {
    Text, TextInput,
    View, ScrollView, ActivityIndicator,
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


const syncFetch = (q) => fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => responseJson.movies.filter(item =>
         JSON.stringify(item).toLowerCase().includes(q.toLowerCase())))
      .catch((error) => {
        console.error(error)
      })


export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [], loading: false }
  }
  async postSearch(text) {
    if (text.length > 3) {
      this.loading = true
      const items = await syncFetch(text)
      this.loading = false
      this.setState({ items })
    }
  }
  showList() {
    if (this.state.loading) return <ActivityIndicator animating color="black" size="large" />
    return this.state.items.map(item => <ListItem
      key={item.title}
      title={item.title}
      episodeNumber={item.releaseYear}
    />)
  }
  render() {
    return (
      <View style={{ flex: 0.05, padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to search!"
          onChangeText={(text) => this.postSearch(text)}
        />
        <ScrollView>
          {this.showList()}
        </ScrollView>
      </View>
    )
  }
}
