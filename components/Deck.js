import React, { Component } from "react";
import { View, Animated } from "react-native";

class Deck extends Component {
  render() {
    return (
      <View>
        {this.props.data.length > 0 &&
          this.props.data.map(item => this.props.renderCard(item))}
      </View>
    );
  }
}

export default Deck;
