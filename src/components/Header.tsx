import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import common from "../styles/common";
import { Colors } from "../utils/Color";

interface HeaderProps {
  backArrow?: Boolean;
  name: string;
  onPressBack?: () => void;
}

const Header = ({ name, backArrow, onPressBack }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={[styles.Header, common.ItemsCenter, common.FlexBox]}>
        <View style={[common.FlexBox, common.ItemsCenter]}>
          {backArrow ? (
            <FontAwesome5
              onPress={() =>
                onPressBack ? onPressBack() : navigation.goBack()
              }
              size={24}
              color={Colors.White}
              name="arrow-left"
            />
          ) : null}
          <Text
            style={[
              styles.Title,
              backArrow ? { marginLeft: 15 } : { marginLeft: 0 },
            ]}
          >
            {name}
          </Text>
        </View>

        <View>
          {!backArrow ? (
            <Feather
              onPress={() => navigation.navigate("Settings")}
              size={22}
              name="settings"
              color="white"
            />
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  Header: {
    justifyContent: "space-between",
    height: 60,
    width: "100%",
    backgroundColor: Colors.SecondaryColor,
    alignItems: "center",
    color: Colors.White,
    padding: 10,
    borderBottomColor: "#333",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    marginBottom: 10,
  },
  Title: {
    fontSize: 23,
    color: Colors.White,
    marginLeft: 15,
    fontWeight: "600",
  },
});

export default Header;
