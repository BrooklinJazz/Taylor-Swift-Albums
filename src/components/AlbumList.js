import React, { Component } from 'react';
import ReactNative from 'react-native';
import { View, Text } from 'react-native'

class AlbumList extends Component {
    componentWillMount() {
        console.log('Component Will Mount in Album List')
    }
    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
         )
    }
}

export default AlbumList;
