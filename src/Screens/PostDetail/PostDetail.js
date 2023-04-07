import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import RedButton from "../../Components/RedButton";
import WhiteButton from "../../Components/WhiteBtn";
import ImagePath from "../../Constants/ImagePath";
import { PostDetailStyle } from "./PostDetailStyle";

export default function PostDetail({navigation}) {
    return (
        <View style={PostDetailStyle.container}>
            <View style={PostDetailStyle.topView}>
                <View style={PostDetailStyle.addImgView}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}} >
                    <Image source={ImagePath.backArrow} style={PostDetailStyle.addImageImg} />
                    </TouchableOpacity>
                    <Text style={PostDetailStyle.addImageText}>
                        Add info
                    </Text>
                </View>
                <View style={PostDetailStyle.plusView}>
                    <Text style={PostDetailStyle.plusText}>
                        +
                    </Text>
                </View>

                <View style={PostDetailStyle.descriptionView}>
                    <TextInput placeholder="Write description here..." placeholderTextColor={'rgba(255,255,255,0.5)'} />
                </View>
                <View style={PostDetailStyle.locationView}>
                    <TextInput placeholder="Add Location" placeholderTextColor={'rgba(255,255,255,0.5)'} />
                </View>
            </View>
            <View style={PostDetailStyle.bottomView}>
                <RedButton redBtnText={'POST'} />
            </View>

        </View>
    )
}
