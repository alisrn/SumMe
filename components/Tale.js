import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default class Tale extends Component {
  onTalePress = () => {
    this.props.onTalePress(this.props.index);
  };

  render() {
    return (
      <TouchableOpacity num={this.props.num}
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
        <Text style={{ fontSize: 32 }} >{this.props.num}</Text>
      </TouchableOpacity>

    );
  }
}