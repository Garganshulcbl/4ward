//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import ImagePath from '../../Constants/ImagePath';
import { moderateScale } from 'react-native-size-matters';
import GetStartedCard from '../../Components/GetStartedCard';
import { GetStartedStyle } from './GetStartedStyles';


// create a component
const GetStarted = ({navigation}) => {
    return (
        <View style={GetStartedStyle.container}>
            <ScrollView
                horizontal
                pagingEnabled
            >
                <GetStartedCard leftMargin={24} />
                <GetStartedCard leftMargin={8} rightMargin={24} />
            </ScrollView>

            <View style={GetStartedStyle.baseView}>
                <Image source={ImagePath.dotsIcon}
                    style={GetStartedStyle.baseViewImg}
                />
                <TouchableOpacity onPress={()  => {navigation.navigate('Login')}}>
                    <Text style={GetStartedStyle.baseViewText}>
                        GET STARTED
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};


//make this component available to the app
export default GetStarted;
