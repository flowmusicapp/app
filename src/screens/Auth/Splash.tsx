import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import FlowButton from "../../components/ux/Button";
import TextAnimator from "../../components/ux/TextAnimator";
import common from "../../styles/common";
import { Colors } from "../../utils/Color";

const Signup = () => {
  const navigation = useNavigation();
  const splashImage = {
    uri:
      "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  const onFinish = () => {
    // return;
    console.log(true);
  };

  return (
    <ImageBackground
      source={splashImage}
      style={[common.Fit, styles.WelcomeScreen]}
    >
      <Text style={styles.Caption}>Flow Music</Text>
      <TextAnimator
        content="Flow Music"
        textStyle={styles.Brand}
        duration={1000}
        onFinish={() => onFinish()}
      />

      <View>
        <Text style={[styles.Brand]}>Welcome to </Text>
        <Text style={[styles.Brand, styles.Logo]}>Flow</Text>
      </View>
      <Text style={[styles.Description]}>
        Find what music your best people are listeinig
      </Text>
      <View style={{ marginTop: 50 }}>
        <FlowButton
          title="Get Started"
          onPress={() => navigation.navigate("HomeTabs")}
        />
      </View>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  WelcomeScreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  Brand: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 0,
    fontWeight: "500",
  },
  Logo: {
    textAlign: "center",
    fontSize: 35,
    textTransform: "uppercase",
    marginBottom: 20,
    fontWeight: "800",
  },
  Description: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    maxWidth: 350,
  },
  Caption: {
    color: Colors.PrimaryColor,
    fontSize: 17,
    fontWeight: "500",
  },
});
