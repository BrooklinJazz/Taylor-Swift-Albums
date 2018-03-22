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
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        // allows android to work
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
 
export default Header;