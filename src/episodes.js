import React, { Component, PropTypes } from 'react'
import {
    Text,
    View,
} from 'react-native'

export class EpisodeListItem extends Component {
  static propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }
  static defaultProps = {
    number: 'number',
    title: 'Title',
    name: 'name',
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 5 }}>
        <View style={{ width: 70, height: 50, marginRight: 10, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={{ color: 'grey' }}>{this.props.number}</Text>
          <Text>{this.props.title}</Text>
          <Text style={{ color: 'grey' }}>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}
