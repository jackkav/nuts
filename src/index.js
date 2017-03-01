import React, { Component } from 'react'
import {
  View, ScrollView,
  ActivityIndicator,
} from 'react-native'

import { SearchBar, ListItem } from './components'


export default class nuts extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [], loading: false }
  }
  componentDidMount() {
    this.state.loading = true
    fetch('https://demonic-persistance.herokuapp.com/api/showTitles')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ items: responseJson })
        this.state.loading = false
      })
      .catch((error) => {
        this.state.loading = false
        console.error(error)
      })
  }
  showList() {
    if (!this.state.loading) return <ActivityIndicator animating color="black" size="large" />
    return this.state.items.map(item => <ListItem
      key={item}
      title={item}
    />)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        {/* <ScrollView>
          {this.showList()}
        </ScrollView>*/}
      </View>
    )
  }
}
