import React from 'react';
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native';
import TaleList from "./TaleList";

const SumBoard = (props)=> {
  return(
    <View style={style.sumBoard} >
      <TaleList key={"sumList"} taleNumList = {props.sumList} index={0}
        columnCount = {props.columnCount}
      />
    </View>
  );
}

const style = StyleSheet.create({
  sumBoard: {
    flex: 1,
    backgroundColor: '#def',
    alignItems: 'center',
    borderRadius:30,
    padding:10,
    justifyContent: 'center',
  }
});

export default SumBoard;