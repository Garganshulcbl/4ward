//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ImagePath from "../../Constants/ImagePath";
import TextBox from "../../Components/TextBox";
import RedButton from "../../Components/RedButton";
import HeadText from "../../Components/HeadText";
import { Login1_1Style } from "./Login1_1Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkStatus } from "../../redux/actions/loginAction";

// create a component

const Login1_1 = ({ navigation }) => {
  const [state, setState] = useState(true);
  const [hideShow, setHideShow] = useState("Show");

  const [mobile, setmobile] = useState("");
  const [pass, setPass] = useState("");

    function addMobile(val) {
        if (val.match('^[0-9]*$'))
            setmobile(val);
    }

  const storeLogin = async ()=> {
    if(mobile!="" || pass !=""){
      await  AsyncStorage.setItem('userCreds', (mobile,pass) )
      console.log(mobile, pass, 'login1-1 page29')
      // await  AsyncStorage.setItem('usermobile', (mobile) )
     checkStatus(true)
    }
    else{
      alert("Fields can't be empty...")
    }
  }

  return (
    <View style={Login1_1Style.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={Login1_1Style.backArrow}
        >
          <Image source={ImagePath.backArrow} />
        </TouchableOpacity>
        <HeadText
          mainText="Welcome back!"
          subText="Create an account so you can continue."
        />
      </View>
      <View style={Login1_1Style.upperView}>
        <View style={Login1_1Style.mobileNumView}>
          <View style={Login1_1Style.mobileViewLeft}>
            <TextBox placeholder="+91" />
          </View>
          <View style={Login1_1Style.mobileNumRight}>
            <TextBox
              keyboardType="number-pad"
              placeholder="Mobile number"
              value={mobile}
              onChangeText={addMobile}
              maxLength={10}
            />
          </View>
        </View>
        <View style={Login1_1Style.mainPassView}>
          <View style={Login1_1Style.subPassView}>
            <TextBox
              secureTextEntry={state}
              placeholder="Password"
              Show={hideShow}
              onChangeText={(val) => {
                setPass(val);
              }}
              onPress={() => {
                state
                  ? (setState(false), setHideShow("Hide"))
                  : (setState(true), setHideShow("Show"));
              }}
            />
          </View>
        </View>
        <View style={Login1_1Style.otpView}>
          <Text style={Login1_1Style.useOtpText}>Use OTP</Text>
          <TouchableOpacity>
            <Text style={Login1_1Style.forgotPassText}>forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Login1_1Style.lowerView}>
        <RedButton redBtnText="LOGIN" onPress={() => storeLogin()} />
      </View>
    </View>
  );
};

//make this component available to the app
export default Login1_1;
