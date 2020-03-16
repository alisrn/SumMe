import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TaleList from "./TaleList";
import Header from "./Header";
import SumBoard from "./SumBoard";


export default class TaleBoardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numList: [],
      sumList: [],
      firstPressedIndex: null
    }
  }

  generateNum() {
    let defList = [];
    let forSumList = [];
    for (let i = 0; i < 16; i++) {
      defList.push(Math.round(Math.random() * 10));
      if (i < 4) {
        forSumList.push(defList[i]);
      } else {
        forSumList[i % 4] += defList[i];
      }
    };
    console.log("forSumList", forSumList);
    console.log("defList", defList);
    this.setState({
      numList: defList,
      sumList: forSumList
    })
  };

  onTalePress(index) {
    let firstPressedIndex = this.state.firstPressedIndex;
    if (firstPressedIndex == undefined || firstPressedIndex == null) {
      this.setState({ firstPressedIndex: index });
    } else {
      let tempList = this.state.numList;
      let firstIndex = firstPressedIndex[0] * 4 + firstPressedIndex[1];
      let secondIndex = index[0] * 4 + index[1];
      let temp1 = tempList[firstIndex];
      tempList[firstIndex] = tempList[secondIndex];
      tempList[secondIndex] = temp1;
      this.setNewListAndSumList(tempList);
    }
  }

  setNewListAndSumList(defList) {
    let forSumList = [];
    for (let i = 0; i < 16; i++) {
      if (i < 4) {
        forSumList.push(defList[i]);
      } else {
        forSumList[i % 4] += defList[i];
      }
    }
    this.setState({
      sumList: forSumList,
      numList: defList,
      firstPressedIndex: null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header onPress={this.generateNum.bind(this)} />
        </View>
        <View style={styles.gamePlace} >
          <TaleList key={0}
            index={0}
            taleNumList={this.state.numList}
            onTalePress={this.onTalePress.bind(this)} 
            pressedIndex={this.state.firstPressedIndex} />
          <TaleList key={1}
            index={1}
            taleNumList={this.state.numList}
            onTalePress={this.onTalePress.bind(this)}
            pressedIndex={this.state.firstPressedIndex} />
          <TaleList key={2}
            index={2}
            taleNumList={this.state.numList}
            onTalePress={this.onTalePress.bind(this)}
            pressedIndex={this.state.firstPressedIndex} />
          <TaleList key={3}
            index={3}
            taleNumList={this.state.numList}
            onTalePress={this.onTalePress.bind(this)}
            pressedIndex={this.state.firstPressedIndex} />
        </View>
        <SumBoard sumList={this.state.sumList} />
      </View>
    );
  }
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