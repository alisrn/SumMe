import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TaleList from "./TaleList";
import Header from "./Header";
import SumBoard from "./SumBoard";

const levels = [{
  level: 1,
  rowNum: 3,
  colNum: 3,
  total: 9
},
{
  level: 2,
  rowNum: 4,
  colNum: 4,
  total: 16
}
];
export default class TaleBoardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numList: [],
      sumList: [],
      firstPressedIndex: null,
      configuredLevel: levels.find(x => x.level == this.props.route.params.level)
    };
  }

  generateNum() {
    let configuredLevel = this.state.configuredLevel;
    let sum = 0;
    let defList = [];
    let forSumList = [];
    for (let i = 0; i < configuredLevel.total; i++) {
      defList.push(Math.round(Math.random() * 10));
      if (i < configuredLevel.colNum) {
        forSumList.push(defList[i]);
      } else {
        forSumList[i % configuredLevel.colNum] += defList[i];
      }
      sum += defList[i];
    };
    console.log(sum);
    if (sum % configuredLevel.colNum != 0) {
      this.generateNum();
      return;
    }
    this.setState({
      numList: defList,
      sumList: forSumList
    })
  };

  onTalePress(index) {
    let configuredLevel = this.state.configuredLevel;
    let firstPressedIndex = this.state.firstPressedIndex;
    if (firstPressedIndex == undefined || firstPressedIndex == null) {
      this.setState({ firstPressedIndex: index });
    } else {
      let tempList = this.state.numList;
      let firstIndex = firstPressedIndex[0] * configuredLevel.colNum + firstPressedIndex[1];
      let secondIndex = index[0] * configuredLevel.colNum + index[1];
      let temp1 = tempList[firstIndex];
      tempList[firstIndex] = tempList[secondIndex];
      tempList[secondIndex] = temp1;
      this.setNewListAndSumList(tempList);
    }
  }

  setNewListAndSumList(defList) {
    let configuredLevel = this.state.configuredLevel;
    let forSumList = [];
    for (let i = 0; i < configuredLevel.total; i++) {
      if (i < configuredLevel.colNum) {
        forSumList.push(defList[i]);
      } else {
        forSumList[i % configuredLevel.colNum] += defList[i];
      }
    }
    this.setState({
      sumList: forSumList,
      numList: defList,
      firstPressedIndex: null
    });
  }

  render() {
    let configuredLevel = this.state.configuredLevel;
    var foo = [];
    for (let i = 0; i < configuredLevel.rowNum; i++) foo.push(i);
    var taleListObj = foo.map((x, index) => {
      return (
        <TaleList key={index}
          index={index}
          columnCount={configuredLevel.colNum}
          taleNumList={this.state.numList}
          onTalePress={this.onTalePress.bind(this)}
          pressedIndex={this.state.firstPressedIndex}
        />
      )
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header onPress={this.generateNum.bind(this)} />
        </View>
        <View style={styles.gamePlace} >
          {taleListObj}
          {/*           <TaleList key={0}
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
            pressedIndex={this.state.firstPressedIndex} /> */}
        </View>
        <SumBoard sumList={this.state.sumList}
          columnCount={configuredLevel.colNum}
        />
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