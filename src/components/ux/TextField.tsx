import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../utils/Color";

interface InputProps {
  placeholder?: string;
  style?: any;
  onBlur?: () => void;
  onChangeText?: () => void;
  value: any;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  disabled?: boolean;
  multiLine?: boolean;
}

export default function TextField({
  placeholder,
  style,
  onBlur,
  onChangeText,
  value,
  errorMessage,
  error,
  multiLine,
  label,
}: InputProps) {
  return (
    <View>
      {label && <Text style={[styles.Label]}>{label}</Text>}
      <TextInput
        multiline={multiLine}
        placeholder={placeholder}
        style={[
          style,
          styles.TextInput,
          error || errorMessage ? styles.HasError : "",
          errorMessage ? { marginBottom: 0 } : { marginBottom: 15 },
        ]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />

      {(errorMessage || error) && (
        <Text style={[styles.ErrorMsg]}>{errorMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    minHeight: 50,
    backgroundColor: Colors.DarkGrey,
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
    width: "100%",
    paddingLeft: 10,
  },
  HasError: {
    borderColor: Colors.PrimaryColor,
    borderWidth: 1,
  },
  ErrorMsg: {
    color: Colors.PrimaryColor,
    marginTop: 4,
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 15,
  },
  Label: {
    fontSize: 17,
    marginBottom: 5,
    color: Colors.White,
    fontWeight: "600",
  },
});
