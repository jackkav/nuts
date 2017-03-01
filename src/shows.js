import React, { Component, PropTypes } from 'react'
import {
    Text,
    View, TouchableHighlight,
} from 'react-native'

export class ShowListItem extends Component {
  static propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }
  static defaultProps = {
    number: '',
    title: 'Title',
    name: '',
  }
  _onPressButton(e, f) {
    alert('You tapped the button!', f, e)
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
        <TouchableHighlight onPress={this._onPressButton} style={{ width: 70, height: 50, marginRight: 10, justifyContent: 'center' }} >
          <Text>Like</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
