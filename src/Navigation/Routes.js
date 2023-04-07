import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainStack } from "./MainStack"
import { AuthStack } from "./AuthStack"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSelector } from "react-redux"
import { store } from "../redux/store"



const Stack= createNativeStackNavigator()
export const Routes=()=>{
    const val= useSelector((state) => state.status)
    console.log(val, "check")
    
    // const[status,setstatus]=useState(false)
    // const storeUserCred = async () => {
    //     let val = await AsyncStorage.getItem('userCreds')
    // if(val){
    //     setstatus(true)

    // }
    
    //   }
    //   storeUserCred()

    return(
   <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        {val?MainStack():AuthStack()}
    </Stack.Navigator>
   </NavigationContainer>

    )
}