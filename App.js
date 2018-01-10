import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello, world!</Text>
        <Text style={styles.message}>
          This is my first greeting on React-Native!
        </Text>
        <Text style={styles.message}>-with love, Robin Oh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    margin: 9,
    fontStyle: 'italic'
  }
});
