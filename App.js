import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Title from "./Title";
import Input from "./Input";
import List from "./List";

export default function App() {
  const [todos, setTodos] = useState([
    "click to remove",
    "Learn React Native",
    "Write Code",
    "Ship App",
  ]);

  const onAddTodo = (text) => {
    setTodos((curr) => [text, ...curr]);
  };

  const onRemoveTodo = (index) => {
    setTodos((curr) => curr.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Title>To-Do List</Title>
      <Input
        placeholder={"Type a todo, then hit enter!"}
        onSubmitEditing={onAddTodo}
      />
      <List list={todos} onPressItem={onRemoveTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
