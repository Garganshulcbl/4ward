import React from "react";
import { View, Image, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import ImagePath from "../Constants/ImagePath";

const ProfileComp = ({ addText, imgPath, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <Image source={imgPath} />
            <Text style={styles.addText}>
                {addText}
            </Text>
        </TouchableOpacity >
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        flexDirection: 'row',
        alignContent: 'center'
    },

    addText: {
        marginLeft: 20,
        fontSize: 15,
        color: '#FFFFFF'
    },

})

export default ProfileComp;