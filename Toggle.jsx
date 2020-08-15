import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Toggle({ label, options, value, onChange }) {
  const renderOption = useCallback(
    (option, i) => (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={() => onChange(option)}
        key={i}
      >
        <Text style={styles.text}>{option}</Text>
      </TouchableOpacity>
    ),
    [onChange, value],
  );

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.optionsContainer}>{options.map(renderOption)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
});

export default Toggle;
