import React from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

function ReactNativeTest() {
    return <View style={styles.view}>
        <Text style={styles.text}>React native test screen</Text>
    </View>
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: 40,
    }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
