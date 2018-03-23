import React from 'react';
// import ReactNative from 'react-native';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    )
}

export default AlbumDetail;