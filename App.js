import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaleBoard from "./components/TaleBoard";
import SumBoard from "./components/SumBoard";
import Header from "./components/Header";

export default function App() {
  const [numList, setNumList] = useState([]);
  const [sumList, setSumList] = useState([]);
  const [firstPressedIndex, setFirstPressedIndex] = useState([]);
  const generateNum = () => {
    var defList = [];
    for (let i = 0; i < 16; i++) {
      defList.push(Math.round(Math.random() * 10));
    }
    setNumList(defList);
    getSumList(defList);
  };

  const getSumList = defList => {
    var forSumList = [];
    for(let i = 0; i < 16 ; i++){
      if (i < 4) {
        forSumList.push(defList[i]);
      } else {
        forSumList[i % 4] += defList[i];
      }
    }
    setSumList(forSumList);
  }

  const onTalePress = (index) => {
    if (firstPressedIndex == undefined || firstPressedIndex == null) {
      setFirstPressedIndex(index);
    } else {
      let tempList = numList;
      let firstIndex = firstPressedIndex[0]*4 + firstPressedIndex[1];
      let secondIndex = index[0]*4 + index[1];
      let temp1 = tempList[firstIndex];
      tempList[firstIndex] = tempList[secondIndex];
      tempList[secondIndex] = temp1;
      setNumList(tempList);
      getSumList(tempList);
      setFirstPressedIndex(null);
    }
    console.log(firstPressedIndex);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onPress={generateNum} />
      </View>
      <TaleBoard numList={numList} onTalePress={onTalePress} pressedIndex={firstPressedIndex} />
      <SumBoard sumList={sumList} />
      <View style={styles.container}>
        <Text>Slide, Slide, Slide!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  gamePlace: {
    flex: 6,
    backgroundColor: '#abc',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tale: {
    flex: 1,
    flexDirection: "row",
  },
  header: {
    flex: 2,
    borderRadius: 40,
    flexDirection: "row",
  }
});
