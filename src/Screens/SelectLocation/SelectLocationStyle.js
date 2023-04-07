import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";


export const selectLocationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2E2E',
        padding: moderateScale(24),
    },

    topView: { 
        flex: 0.9 
    },

    mainTextView: { 
        marginTop: moderateScale(32), 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },

    locationOffText: { 
        fontSize: 24, 
        color: '#FFFFFF' 
    },

    turnOnBtnView: { 
        borderRadius: 8, 
        backgroundColor: '#F43738', 
        padding: 8 
    },

    turnOnText: { 
        fontSize: 12, 
        color: '#FFFFFF' 
    },

    subTextView: { 
        marginTop: 16.5, 
        width: moderateScale(248) 
    },

    orView: { 
        marginTop: 16 
    },

    orText: { 
        fontSize: 16, 
        color: '#FFFFFF', 
        textAlign: 'center' 
    },

    textBoxView: { 
        marginTop: 26 
    },

    suggestionsView: { 
        marginTop: 20.5 
    },

    suggestionsText: { 
        fontSize: 15, 
        color: '#FFFFFF' 
    },

    bottomView: { 
        flex: 0.1, 
        justifyContent: 'flex-end'
    },

})