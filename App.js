import React from "react";
import { StyleSheet, StatusBar, View, YellowBox, Text } from "react-native";
import Ball from "./components/Ball";
import Deck from "./components/Deck";
YellowBox.ignoreWarnings(["Remote debugger"]);
export default class App extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10&gender=female")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }

  renderCard = item => {
    return <View key={item.login.uuid}>
    {item.name.first}
    </View>;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {/* <Ball /> */}
        <Deck data={this.state.data} renderCard={this.renderCard} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FBFC"
  }
});
