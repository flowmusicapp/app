import React from "react";
import { Text, View } from "react-native";
import Header from '../../components/Header'

const Settings = () => {
  return (
    <View>
      <Header backArrow={true} name="Settings "/>
      <Text>Settings Page</Text>
    </View>
  );
};

export default Settings;
