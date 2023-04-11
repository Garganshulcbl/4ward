import { View } from "react-native";

export default function WrapperContainer({ children, wrapperStyle }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2E2E2E",
        padding: 24,
        ...wrapperStyle
      }}
    >
      {children}
    </View>
  );
}
//backgroundColor: "#2E2E2E",