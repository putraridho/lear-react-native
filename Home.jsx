import React, { useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from './postsRedux';

function Home({ error, loading, posts, dispatch }) {
  useEffect(() => {
    dispatch(actionCreators.fetchPosts());
  }, [dispatch]);

  const refresh = async () => {
    await dispatch(actionCreators.clearPosts());
    dispatch(actionCreators.fetchPosts());
  };

  const renderPost = ({ id, title, body }, i) => (
    <View key={id} style={styles.post}>
      <View style={styles.postNumber}>
        <Text>{i + 1}</Text>
      </View>
      <View style={styles.postContent}>
        <Text>{title}</Text>
        <Text style={styles.postBody}>{body}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load posts!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>{posts.map(renderPost)}</ScrollView>
      <TouchableOpacity style={styles.button} onPress={refresh}>
        <Text>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});

const mapStateToProps = ({ loading, error, posts }) => ({
  loading,
  error,
  posts,
});

export default connect(mapStateToProps)(Home);
