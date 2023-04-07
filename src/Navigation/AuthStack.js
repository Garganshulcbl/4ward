import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../Screens/GetStarted/GetStarted";
import Login from "../Screens/Login/Login";
import Login1_1 from "../Screens/Login1_1/Login1_1";
import SignUp from "../Screens/SignUp/SignUp";
import SignUp1_1 from "../Screens/SignUp1_1/SignUp1_1";
import SetPassword from "../Screens/SetPassword/SetPassword";
import SelectLocation from "../Screens/SelectLocation/SelectLocation";
import { BottomTab } from "./BottomTab";
const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Login1_1" component={Login1_1} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="SignUp1_1" component={SignUp1_1} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </>
  );
}
