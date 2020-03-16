import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      level:1
    }
  }
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
        <Text style={{ fontSize: 40, color:'red' }} >{this.state.level}</Text>
        <TouchableOpacity>
          <Button title={"Play"} onPress={() => this.props.navigation.push('Game',{
            level: this.state.level,
          })}/>
        </TouchableOpacity>
      </View>
    );
  }
}