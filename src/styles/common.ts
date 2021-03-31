import { StyleSheet } from "react-native";
import { Colors } from "../utils/Color";

export default StyleSheet.create({
  PrimaryFont: {
    fontSize: 17,
  },
  PrimaryColor: {
    color: "#4eb7ab",
  },
  PrimaryBg: {
    backgroundColor: Colors.PrimaryColor,
  },
  Fit: {
    height: "100%",
    width: "100%",
  },
  PagePadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  FlexBox: {
    display: "flex",
    flexDirection: "row",
  },
  FlexCol: {
    flexDirection: "column",
  },
  ItemsCenter: {
    alignItems: "center",
  },
  JustifyCenter: {
    justifyContent: "center",
  },
  JustifyEnd: {
    justifyContent: "flex-end",
  },
  JustifyBetween: {
    justifyContent: "space-between",
  },
  Flex1: {
    flex: 1,
  },
  PageLayout: {
    backgroundColor: Colors.SecondaryColor,
    color: Colors.White,
    height: "100%",
    width: "100%",
  },
  PageTitle: {
    color: Colors.White,
    fontSize: 18,
  },
  PrimaryButton: {
    backgroundColor: Colors.PrimaryColor,
    textAlign: "center",
    width: 300,
    height: 45,
    borderRadius: 5,
  },
});
