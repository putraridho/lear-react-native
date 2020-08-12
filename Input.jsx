import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ onSubmitEditing, ...props }) => {
  const [text, setText] = useState("");

  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={(val) => setText(val)}
      onSubmitEditing={() => {
        if (!text) return;
        onSubmitEditing(text);
        setText("");
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});

export default Input;
