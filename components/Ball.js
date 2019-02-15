import React, { Component } from "react";
import { View, Animated } from "react-native";

class Ball extends Component {
  state = {
    position: new Animated.ValueXY(0, 0)
  };
  componentDidMount() {
    Animated.spring(this.state.position, {
      toValue: {
        x: 200,
        y: 500
      }
    }).start();
  }
  render() {
    const { position } = this.state;
    return (
      <Animated.View style={position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: "#C7493A"
  }
};

export default Ball;
