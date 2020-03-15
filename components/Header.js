import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props)=> {
  return(
    <View style = {style.header} onTouchStart={props.onPress}>
      <Text style={style.text}>2048 NG</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#def',
    alignItems: 'center',
    borderRadius:30,
    justifyContent: 'center',
  },
  text:{
    fontSize:60
  }
});

export default Header;