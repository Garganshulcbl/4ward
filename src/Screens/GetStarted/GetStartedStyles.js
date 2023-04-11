import { StyleSheet } from "react-native";

export const GetStartedStyle = StyleSheet.create({
  container: {
    backgroundColor: "#2e2e2e",
    flex: 1,
    padding: 24,
  },

  baseView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
  },

  baseViewImg: {
    width: 80,
    height: 4,
    marginTop: 8,
  },

  baseViewText: {
    marginHorizontal: 24,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 35,
  },
});
