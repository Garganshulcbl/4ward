import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTab } from "./BottomTab";
import EditProfile from "../Screens/EditProfile/EditProfile";
import ChangePassword from "../Screens/ChangePassword/ChangePassword";

const Stack = createNativeStackNavigator();
export function MainStack() {
  return (
    <>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </>
  );
}
