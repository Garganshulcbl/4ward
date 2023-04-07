import { StyleSheet } from "react-native";

export const ChangePasswordStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e2e2e',
        padding: 24,
    },
    upperView: {
        flex: 0.9,
        marginTop: 32
    },

    changePassView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    changePassTextView: {
        paddingLeft: 16
    },

    changePassText: {
        fontSize: 16,
        color: '#FFFFFF'
    },

    passView: {
        marginTop: 32
    },

    confirmPassView: {
        marginTop: 16
    },

    lowerView: {
        flex: 0.1,
        justifyContent: 'flex-end'
    }
})