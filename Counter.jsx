import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

function Counter({ color, size }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((curr) => curr + 1);
    }, 1000);
  }, []);

  return <Text style={{ color, fontSize: size }}>{count}</Text>;
}

export default Counter;
