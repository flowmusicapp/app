import React from "react";
import { Text, View } from "react-native";
import Header from '../../components/Header'

const LiveStream = () => {
  return (
    <View>
      <Header backArrow={false} name="LiveStream "/>
      <Text>LiveStream</Text>
    </View>
  );
};

export default LiveStream;
