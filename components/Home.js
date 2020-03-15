import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View num={this.props.num}
        style={
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            margin: 3,
            borderWidth: 1,
            borderColor: "blue",
            backgroundColor: this.props.pressed ? "#aaa" : "#afd",
          }}
          onPress={this.onTalePress}  >
        <Text style={{ fontSize: 32 }} >Level</Text>
        <Text style={{ fontSize: 40, color:'red' }} >1</Text>
        <TouchableOpacity>
          <Button title={"Play"} onPress={() => this.props.navigation.push('Game')}/>
        </TouchableOpacity>
      </View>
    );
  }
}