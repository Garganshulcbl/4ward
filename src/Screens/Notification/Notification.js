import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import NotificationList from "../../Components/NotificationList";
import { notificationList } from "../../Constants/FlatlistData";
import { NotificationStyle } from "./NotificationStyle";
import WrapperContainer from "../../Components/WrapperContainer";

export default function Notification() {
  return (
    <WrapperContainer>
      <View style={NotificationStyle.notificationView}>
        <Text style={NotificationStyle.notificationtext}>Notification</Text>
      </View>

      <FlatList data={notificationList} renderItem={NotificationList} />
    </WrapperContainer>
  );
}
