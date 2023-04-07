import { StyleSheet } from "react-native";

export const SearchStyle = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#2E2E2E',
    },

    textBoxView: {
        marginTop: 32
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
