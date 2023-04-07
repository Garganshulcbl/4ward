import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2E2E',
        padding: moderateScale(24),
    },

    iconView: {
        marginTop: moderateVerticalScale(22),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconImg: {
        height: moderateVerticalScale(54),
        resizeMode: 'contain'
    },


})