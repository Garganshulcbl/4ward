import React, { useState } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import ImagePath from "../../Constants/ImagePath";
import HeadText from "../../Components/HeadText";
import TextBox from "../../Components/TextBox";
import RedButton from "../../Components/RedButton";
import { SignUp1_1Style } from "./SignUp1_1Style";
import WrapperContainer from "../../Components/WrapperContainer";

const SignUp1_1 = ({ navigation }) => {
  const [code1, setCode1] = useState("");
  function addCode1(val) {
    if (val.match("^[0-9]*$")) {
      setCode1(val);
    }
  }

  const [code2, setCode2] = useState("");
  function addCode2(val) {
    if (val.match("^[0-9]*$")) {
      setCode2(val);
    }
  }

  const [code3, setCode3] = useState("");
  function addCode3(val) {
    if (val.match("^[0-9]*$")) {
      setCode3(val);
    }
  }

  const [code4, setCode4] = useState("");
  function addCode4(val) {
    if (val.match("^[0-9]*$")) {
      setCode4(val);
    }
  }

  function verifyBtn() {
    if (navigation.navigate("SetPassword")) {
      // if (code1 == "" || code2 == "" || code3 == "" || code4 == "") {
      alert("Enter Code.");
    } else {
      navigation.navigate("SetPassword");
    }
  }

  return (
    <WrapperContainer>
      <View style={SignUp1_1Style.topView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ImagePath.backArrow} />
        </TouchableOpacity>
        <View>
          <HeadText mainText="Enter the 4-digit code sent to you at 875 364 8947" />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={SignUp1_1Style.editNumText}>
              Edit my mobile number
            </Text>
          </TouchableOpacity>
        </View>
        <View style={SignUp1_1Style.textBoxView}>
          <TextBox
            autoFocus={true}
            value={code1}
            onChangeText={addCode1}
            maxLength={1}
          />
          <TextBox value={code2} onChangeText={addCode2} maxLength={1} />
          <TextBox value={code3} onChangeText={addCode3} maxLength={1} />
          <TextBox value={code4} onChangeText={addCode4} maxLength={1} />
        </View>
      </View>
      <View style={SignUp1_1Style.bottomView}>
        <View>
          <Text style={SignUp1_1Style.resendText}>Resend code in 0:14</Text>
          <View style={SignUp1_1Style.redBtnView}>
            <RedButton
              onPress={() => {
                verifyBtn();
              }}
              redBtnText={"VERIFY"}
            />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default SignUp1_1;
