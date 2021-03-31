import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";


//Screens
import OtpVerification from "./screens/Auth/OtpVerification";
import SignupScreen from "./screens/Auth/SignUp";
import WelcomeScreen from "./screens/Auth/WelcomeScreen";
import HotList from "./screens/HotList";
import Votes from "./screens/HotList/Votes";
import LiveStream from "./screens/LiveStream";
import People from "./screens/People";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function AppContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {user} = useSelector((state: any) => state.AuthReducer)

  useEffect(() => {
    checkUserExist()
  },[user]);


  const checkUserExist = async () => {
    // await AsyncStorage.removeItem('User');
    const user = await AsyncStorage.getItem('User');
    user ? setIsAuthenticated(true) : setIsAuthenticated(false)
  }

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  const HomeTabScreen = () => (
    <BottomTab.Navigator
      backBehavior="initialRoute"
      lazy={true}
      initialRouteName="HotList"
      tabBarOptions={{
        activeTintColor: "#940675",
        inactiveTintColor: "black",
        style: {
          borderWidth: 3,
          borderBottomWidth: 0,
          elevation: 5,
          borderColor: "transparent",
          borderTopWidth: 1,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          marginTop: -1,
        },
      }}
    >
      <BottomTab.Screen
        listeners={{
          focus: () =>
            BackHandler.addEventListener("hardwareBackPress", handleBackButton),
          blur: () =>
            BackHandler.removeEventListener(
              "hardwareBackPress",
              handleBackButton
            ),
        }}
        name="HotList"
        component={HotList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              size={21}
              color={focused ? "#940675" : "black"}
              name="trending-up"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="LiveStream"
        component={LiveStream}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              size={23}
              color={focused ? "#940675" : "black"}
              name="radio"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="People"
        component={People}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={23}
              color={focused ? "#940675" : "black"}
              name={"ios-people"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              size={20}
              name="user-circle"
              color={focused ? "#940675" : "black"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName={"Landing"}
        screenOptions={{
          header: () => <Text> Header </Text>,
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Votes"
          component={Votes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar />
      {isAuthenticated ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppContainer;

