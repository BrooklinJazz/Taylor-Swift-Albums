import React from 'react';
import ReactNative from 'react-native'
import { Text, View } from 'react-native'

const Header = () => {
    const {viewStyle, textStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
}
 
export default Header;