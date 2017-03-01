import React, { Component, PropTypes } from 'react'
import {
    Text, TextInput,
    View, ScrollView, TouchableHighlight,
} from 'react-native'


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
    // if (this.state.loading) return <ActivityIndicator animating color="black" size="large" />
    return this.state.items.map(item => <ShowListItem
      key={item.title}
      title={item.title}
      number={item.releaseYear}
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
