import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F'];
const animations = ['fadeIn', 'shake', 'rubberBand', 'zoomOut'];

function Home() {
  const [animation, setAnimation] = useState(animations[0]);

  const renderItem = (color, i) => (
    <Animatable.View
      key={i}
      animation={animation}
      delay={i * 100}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.text}>Tap me {i}</Text>
    </Animatable.View>
  );

  const nextAnimation = () => {
    const nextIndex = (animations.indexOf(animation) + 1) % animations.length;
    setAnimation(animations[nextIndex]);
  };

  return (
    <TouchableOpacity key={animation} onPress={nextAnimation}>
      {colors.map(renderItem)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Home;
