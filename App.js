import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { actionCreators } from './todoListRedux';
import Title from './Title';
import Input from './Input';
import List from './List';

import store from './store';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(store.getState().todos);

    const unsubscribe = store.subscribe(() => {
      setTodos(store.getState().todos);
    });

    return unsubscribe;
  }, []);

  const onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text));
  };

  const onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index));
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Title>To-Do List</Title>
      <Input
        placeholder="Type a todo, then hit enter!"
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
