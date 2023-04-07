import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { incr, decr } from "../redux/actions/countAction";
import { store } from "../redux/store";

const Counter = () => {
  const value = useSelector((state) => state.val);

//   async function abc() {
//     await AsyncStorage.setItem("count", JSON.stringify(value));
//   }
//   abc();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          incr(value);
        }}
        style={{ padding: 16, backgroundColor: "green" }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Increment</Text>
      </TouchableOpacity>

      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{value}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          decr(value);
        }}
        style={{ padding: 16, backgroundColor: "red" }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
