import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import TextBox from "../../Components/TextBox";
import AddressFlatlist from "../../Components/AddressFlatlist";
import { FlatlistData } from "../../Constants/FlatlistData";
import RedButton from "../../Components/RedButton";
import { selectLocationStyle } from "./SelectLocationStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

export default function SelectLocation() {
  return (
    <WrapperContainer>
      <View style={selectLocationStyle.topView}>
        <View style={selectLocationStyle.mainTextView}>
          <View>
            <Text style={selectLocationStyle.locationOffText}>
              {strings.DeviceLocationOff}
            </Text>
          </View>
          <View style={selectLocationStyle.turnOnBtnView}>
            <TouchableOpacity>
              <Text style={selectLocationStyle.turnOnText}>{strings.TURN_ON}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={selectLocationStyle.subTextView}>
          <Text style={{ fontSize: 15, color: "#C7C8C7" }}>
            {strings.turn_on_device_location}
          </Text>
        </View>
        <View style={selectLocationStyle.orView}>
          <Text style={selectLocationStyle.orText}>{strings.or}</Text>
        </View>
        <View style={selectLocationStyle.textBoxView}>
          <TextBox placeholder={"Sector"} Show={"Enter location manually"} />
        </View>
        <View style={selectLocationStyle.suggestionsView}>
          <Text style={selectLocationStyle.suggestionsText}>{strings.Suggestions}</Text>
        </View>
        <View>
          <AddressFlatlist flatdata={FlatlistData} />
        </View>
      </View>
      <View style={selectLocationStyle.bottomView}>
        <RedButton redBtnText={strings.SELECT_PROCEED} />
      </View>
    </WrapperContainer>
  );
}
