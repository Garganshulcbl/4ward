import { StyleSheet } from "react-native";

export const PostDetailStyle = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#2E2E2E',
    },

    topView: {
        flex: 0.9
    },

    addImgView: {
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },

    addImageImg: {
        marginRight: 16,
        width: 24
    },

    addImageText: {
        color: '#FFFFFF',
        fontSize: 16,
    },

    plusView: {
        marginTop: 16,
        backgroundColor: '#4C4C4C',
        width: 64,
        borderRadius: 8
    },

    plusText: {
        fontSize: 40,
        padding: 20
    },

    descriptionView: {
        marginTop: 16,
        backgroundColor: '#4C4C4C',
        height: 96,
        borderRadius: 8,
        paddingTop: 8,
        paddingLeft: 16
    },

    locationView: {
        marginTop: 16,
        backgroundColor: '#4C4C4C',
        height: 48,
        borderRadius: 8,
        paddingVertical: 15,
        paddingLeft: 16
    },

    bottomView: {
        flex: 0.1,
        justifyContent: 'flex-end'
    },
})