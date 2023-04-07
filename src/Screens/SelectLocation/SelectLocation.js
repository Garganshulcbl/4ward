import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import TextBox from '../../Components/TextBox'
import AddressFlatlist from '../../Components/AddressFlatlist'
import { FlatlistData } from '../../Constants/FlatlistData'
import RedButton from '../../Components/RedButton'
import { selectLocationStyle } from './SelectLocationStyle'

export default function SelectLocation() {
    return (
        <View style={selectLocationStyle.container}>
            <View style={selectLocationStyle.topView}>
                <View style={selectLocationStyle.mainTextView}>
                    <View>
                        <Text style={selectLocationStyle.locationOffText}>
                            Device location is off
                        </Text>
                    </View>
                    <View style={selectLocationStyle.turnOnBtnView}>
                        <TouchableOpacity>
                            <Text style={selectLocationStyle.turnOnText}>TURN ON</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={selectLocationStyle.subTextView}>
                    <Text style={{ fontSize: 15, color: '#C7C8C7' }}>
                        Turning on device location will ensure accurate road alerts.
                    </Text>
                </View>
                <View style={selectLocationStyle.orView}>
                    <Text style={selectLocationStyle.orText}>
                        or
                    </Text>
                </View>
                <View style={selectLocationStyle.textBoxView}>
                    <TextBox placeholder={'Sector'} Show={'Enter location manually'} />
                </View>
                <View style={selectLocationStyle.suggestionsView}>
                    <Text style={selectLocationStyle.suggestionsText}>
                        Suggestions
                    </Text>
                </View>
                <View>
                    <AddressFlatlist flatdata={FlatlistData} />
                </View>
            </View>
            <View style={selectLocationStyle.bottomView}>
                <RedButton redBtnText={'SELECT & PROCEED'} />
            </View>

        </View>
    )
}


