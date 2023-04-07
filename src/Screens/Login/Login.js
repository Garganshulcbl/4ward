import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import ImagePath from '../../Constants/ImagePath'
import RedButton from '../../Components/RedButton'
import WhiteButton from '../../Components/WhiteBtn'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { LoginStyle } from './LoginStyle'

export default function Login({ navigation }) {
    return (
        <View style={LoginStyle.container}>
            <View style={LoginStyle.imageView}>
                <Image source={ImagePath.Icon4ward} />
            </View>
            <View style={LoginStyle.topTextView}>
                <Text style={{ color: '#9C9C9C', fontSize: 13, textAlign: 'center' }}>
                    By clicking “Log In”, you agree with our Terms.
                    Learn how we process your data in our Privacy policy.
                </Text>
            </View>
            <View style={LoginStyle.redBtnView}>
                <RedButton onPress={() => { navigation.navigate('Login1_1') }} redBtnText={'Log In with Phone number'} />
            </View>
            <View style={LoginStyle.orView}>
                <Text style={LoginStyle.orText}>
                    or
                </Text>
            </View>
            <View style={LoginStyle.whiteBtnView}>
                <WhiteButton whiteBtnText={'Log In with Google'} whiteBtnImage={ImagePath.googleIcon} />
                <WhiteButton whiteBtnText={'Log In with Facebook'} whiteBtnImage={ImagePath.facebookIcon} />
                <WhiteButton whiteBtnText={'Log In with Apple'} whiteBtnImage={ImagePath.appleIcon} />
            </View>
            <View style={LoginStyle.newSignUpView}>
                <View>
                    <Text style={LoginStyle.newHereText}>
                        New here?
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                    <Text style={LoginStyle.signUpText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
