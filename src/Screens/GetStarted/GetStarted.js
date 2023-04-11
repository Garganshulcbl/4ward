//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImagePath from "../../Constants/ImagePath";
import GetStartedCard from "../../Components/GetStartedCard";
import { GetStartedStyle } from "./GetStartedStyles";
import WrapperContainer from "../../Components/WrapperContainer";

// create a component
const GetStarted = ({ navigation }) => {
  return (
    <WrapperContainer wrapperStyle={{paddingLeft:16,}}>
    {/* <View style={GetStartedStyle.container}> */}
      <ScrollView horizontal pagingEnabled >
        <GetStartedCard/>
        <GetStartedCard />
      </ScrollView>

      <View style={GetStartedStyle.baseView}>
        <Image
          source={ImagePath.dotsIcon}
          style={GetStartedStyle.baseViewImg}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={GetStartedStyle.baseViewText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
    // {/* </View> */}
  );
};

//make this component available to the app
export default GetStarted;
