//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const HeadText = ({ mainText, subText }) => {
    return (
        <View>
            <View style={{ marginTop: 16 }}>
                <Text style={styles.mainText}>
                    {mainText}
                </Text>
            </View>
            <View style={styles.subText}>
                
                {subText ? <Text style={{ color: '#A6A6A6', fontSize: 15 }}>
                    {subText}
                </Text> : null}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainText: {
        fontSize: 24,
        color: '#ffffff',
    },
    subText: {
        marginTop: 16.5,
    }
});

//make this component available to the app
export default HeadText;
