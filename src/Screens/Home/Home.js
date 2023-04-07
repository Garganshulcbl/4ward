import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { HomeStyle } from "./HomeStyle";
import ImagePath from "../../Constants/ImagePath";
import HomeCard from "../../Components/HomeCard";

export default function Home() {
    return (
        <View style={HomeStyle.container}>

            <View style={HomeStyle.iconView}>
                <Image source={ImagePath.homeImage} style={HomeStyle.iconImg} />
                <Image source={ImagePath.locationIcon} style={HomeStyle.iconImg} />
            </View>
            <HomeCard />
        </View>
    )
}