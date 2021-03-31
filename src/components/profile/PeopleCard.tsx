import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProfileProps } from "../../utils/dto/ProfileProps";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../../utils/Color";
import common from "../../styles/common";

interface PeopleProps {
  payload: ProfileProps;
}

export default function PeopleCard(props: PeopleProps) {
  return (
    <View
      style={[
        common.FlexBox,
        common.ItemsCenter,
        styles.PeopleCard,
        { width: "100%" },
      ]}
    >
      <Image
        style={styles.Avatar}
        source={{
          uri: props.payload.thumbnailPath
            ? props.payload.thumbnailPath
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5jy_fadogCIB3Oage4sW-oVwwIJ6d24jZg&usqp=CAU",
        }}
      />
      <View style={[common.Flex1, styles.ProfileDetails]}>
        <Text style={styles.ProfileName}>{props.payload.givenName}</Text>
        <Text style={styles.ProfileName}>
          {props.payload.phoneNumbers[0].number}
        </Text>
      </View>
      <TouchableOpacity>
        <Feather size={21} color={Colors.White} name="more-vertical" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  PeopleCard: {
    marginBottom: 15,
    marginTop: 15,
  },
  Avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  ProfileDetails: {
    marginLeft: 10,
  },
  ProfileName: {
    color: Colors.White,
    fontSize: 16,
  },
});
