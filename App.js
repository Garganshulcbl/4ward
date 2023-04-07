import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GetStarted from "./src/Screens/GetStarted/GetStarted";
import SignUp from "./src/Screens/SignUp/SignUp";
import Splash from "./src/Screens/Splash/Splash";
import Login1_1 from "./src/Screens/Login1_1/Login1_1";
import SignUp1_1 from "./src/Screens/SignUp1_1/SignUp1_1";
import SetPassword from "./src/Screens/SetPassword/SetPassword";
import ChangePassword from "./src/Screens/ChangePassword/ChangePassword";
import Login from "./src/Screens/Login/Login";
import SelectLocation from "./src/Screens/SelectLocation/SelectLocation";
import Search from "./src/Screens/Search/Search";
import Home from "./src/Screens/Home/Home";
import PostDetail from "./src/Screens/PostDetail/PostDetail";
import Profile from "./src/Screens/Profile/Profile";
import Notification from "./src/Screens/Notification/Notification";
import EditProfile from "./src/Screens/EditProfile/EditProfile";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./src/Navigation/AuthStack";
import { BottomTab } from "./src/Navigation/BottomTab";
import { MainStack } from "./src/Navigation/MainStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Counter from "./src/Screens/Counter";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Routes } from "./src/Navigation/Routes";
import { checkStatus } from "./src/redux/actions/loginAction";
import { getApi, postApi } from "./src/utils/utils";

export default function App() {
  let data = {
    username: "honey",
    password: "12345678",
    device_type: "android",
    device_token: "12345",
  };

  // getApi("https://dev.bonkersapp.com/api/get-static-data")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  postApi("https://dev.bonkersapp.com/api/login", {}, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  const asycget = async () => {
    const val = await AsyncStorage.getItem("userCreds");
    if (val) {
      checkStatus(true);
    }
    // const val2 =  await AsyncStorage.getItem('usermobile')
    // console.log(val,'abc');
  };

  asycget();

  return (

    <Provider store={store}>
      <Routes />
    </Provider>
    // <MainStack/>

    // <Splash />
    // <GetStarted />

    // <Login1_1 />
    // <SignUp />
    // <SignUp1_1 />
    // <SetPassword />
    // <Login />
    // <SelectLocation />
    // <Home />
    // <PostDetail />
    // <Search />
    // <Notification />
    // <EditProfile />
    // <Profile />
    // <ChangePassword />
    // </NavigationContainer>
  );
}
