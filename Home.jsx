import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function Home() {
  const [height] = useState(new Animated.Value(100));

  const startAnimation = () => {
    height.setValue(100);

    Animated.spring(height, {
      toValue: 300,
      friction: 0.8,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <AnimatedTouchableOpacity onPress={startAnimation} style={[styles.button, { height }]}>
      <Text style={styles.text}>Tap Me</Text>
    </AnimatedTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
  },
});

export default Home;
