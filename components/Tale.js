import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default class Tale extends Component {

  /*   componentWillMount() {
      this.animatedValue = new Animated.Value(0);
      this.frontInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
      })
    }; */

  onTalePress = () => {
    //this.flipCard();
    this.props.onTalePress(this.props.index);
  };

  flipCard() {
    Animated.timing(this.animatedValue, {
      toValue: 360,
      duration: 800
    }).start();
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{
        rotateY: this.frontInterpolate
      }]
    };

    return (
      /*       <Animated.View style={
              [
                {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  margin: 3,
                  borderWidth: 1,
                  borderColor: "blue",
                  backgroundColor: this.props.pressed ? "#aaa" : "#afd",
                },
                frontAnimatedStyle
              ]}
            > */
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
      /* </Animated.View> */

    );
  }
}

/* const style = StyleSheet.create({
  tale: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 3,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: pressedIndex[0] == index[0] ? "#aaa" : "#afd"
  },
}); */

//export default Tale;