import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { HomeStyle } from "./HomeStyle";
import ImagePath from "../../Constants/ImagePath";
import HomeCard from "../../Components/HomeCard";
import WrapperContainer from "../../Components/WrapperContainer";

export default function Home() {
  return (
    <WrapperContainer>
      <View style={HomeStyle.iconView}>
        <Image source={ImagePath.homeImage} style={HomeStyle.iconImg} />
        <Image source={ImagePath.locationIcon} style={HomeStyle.iconImg} />
      </View>
      <HomeCard />
    </WrapperContainer>
  );
}
