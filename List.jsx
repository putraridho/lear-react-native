import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const List = ({ list, onPressItem }) => {
  return (
    <View>
      {list.map((text, i) => (
        <TouchableOpacity
          style={styles.item}
          key={i}
          onPress={() => {
            onPressItem(i);
          }}
        >
          <Text>{text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15,
  },
});

export default List;
