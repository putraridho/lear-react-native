import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { actionCreators } from './todoListRedux';
import Title from './Title';
import Input from './Input';
import List from './List';

function Home({ todos, dispatch }) {
  const onAddTodo = (text) => {
    dispatch(actionCreators.add(text));
  };

  const onRemoveTodo = (index) => {
    dispatch(actionCreators.remove(index));
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Home);
