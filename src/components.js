import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TextInput,
    View, ScrollView,
    ActivityIndicator,
} from 'react-native';
import debounce from 'lodash/debounce'

export class ListItem extends Component {
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

fetchQuery = debounce((a) => {
    alert('searching for '+a)
}, 500)

export class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    postSearch(text) {
        if (text.length > 3) {
            fetchQuery(text)
            this.setState({ text: text })
            //submit search to API

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