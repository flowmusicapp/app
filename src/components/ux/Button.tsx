import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import common from "../../styles/common";
import { Colors } from "../../utils/Color";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  type?: "secondary" | "primary" | "border";
  style?: any;
  buttonStyle?: any;
  textStyle?: any;
}

const FlowButton = (ButtonProps: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={ButtonProps.onPress}
      style={[
        common.PrimaryButton,
        common.FlexBox,
        common.ItemsCenter,
        common.JustifyCenter,
        ButtonProps.type === "secondary"
          ? styles.SecondaryButton
          : ButtonProps.type === "border"
          ? styles.BorderButton
          : styles.PrimaryButton,
        ButtonProps.style,
      ]}
    >
      <Text style={[styles.ButtonText, ButtonProps.textStyle]}>
        {ButtonProps.title}
      </Text>
    </TouchableOpacity>
  );
};

export default FlowButton;

const styles = StyleSheet.create({
  PrimaryButton: {
    backgroundColor: Colors.PrimaryColor,
  },
  SecondaryButton: {
    backgroundColor: Colors.SecondaryColor,
  },
  ButtonText: {
    color: Colors.White,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  BorderButton: {
    backgroundColor: Colors.SecondaryColor,
    borderColor: Colors.LightGrey,
    borderWidth: 1,
  },
});
