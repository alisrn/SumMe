import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Tale from "./Tale";

const TaleList = (props) => {
  var foo = [];
  for (let i = 0; i < props.columnCount; i++) foo.push(i);
  var taleObj = foo.map((x, index) => {
    return (
      <Tale key = {[props.index, index]}
        num={props.taleNumList[(props.columnCount * props.index) + index]}
        index={[props.index, index]}
        onTalePress={props.onTalePress}
        pressed={props.pressedIndex ? props.pressedIndex[0] == props.index && props.pressedIndex[1] == index : false}
      />
    )
  })
  return (
    <View style={style.taleList} >
      {taleObj}
{/*       <Tale num={props.taleNumList[(4 * props.index)]} index={[props.index, 0]}
        onTalePress={props.onTalePress} pressed={props.pressedIndex ? props.pressedIndex[0] == props.index && props.pressedIndex[1] == 0 : false} />

      <Tale num={props.taleNumList[(4 * props.index) + 1]} index={[props.index, 1]}
        onTalePress={props.onTalePress} pressed={props.pressedIndex ? props.pressedIndex[0] == props.index && props.pressedIndex[1] == 1 : false} />

      <Tale num={props.taleNumList[(4 * props.index) + 2]} index={[props.index, 2]}
        onTalePress={props.onTalePress} pressed={props.pressedIndex ? props.pressedIndex[0] == props.index && props.pressedIndex[1] == 2 : false} />

      <Tale num={props.taleNumList[(4 * props.index) + 3]} index={[props.index, 3]}
        onTalePress={props.onTalePress} pressed={props.pressedIndex ? props.pressedIndex[0] == props.index && props.pressedIndex[1] == 3 : false} />
 */}
    </View>
  );
}

const style = StyleSheet.create({
  taleList: {
    flex: 1,
    flexDirection: "row",
  },
});


export default TaleList;