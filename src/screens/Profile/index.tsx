import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import FlowButton from "../../components/ux/Button";
import common from "../../styles/common";
import { Colors } from "../../utils/Color";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={[common.PageLayout]}>
      <Header name="Profile" />
      <View style={styles.ProfileForm}>
        <View
          style={[common.FlexBox, common.ItemsCenter, common.JustifyCenter]}
        >
          <Image
            style={styles.Avatar}
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
          />
        </View>
        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <FlowButton
            // type="border"
            title="Edit Profile"
            style={{ height: 30, width: "100%" }}
            onPress={() => navigation.navigate("EditProfile")}
          />
        </View>
        <View style={[common.FlexBox, { marginBottom: 30, marginTop: 20 }]}>
          <View style={styles.ProfileIcon}>
            <Feather name="user" color={Colors.White} size={30} />
          </View>
          <View style={styles.ProfileDetails}>
            <Text style={styles.Label}>Name</Text>
            <Text style={styles.Username}>Muhammed Hashim Ea</Text>
            <Text style={styles.Description}>
              This name will be visible for your contacts
            </Text>
          </View>
        </View>
        <View style={[common.FlexBox, { marginBottom: 30, width: "100%" }]}>
          <View style={styles.ProfileIcon}>
            <Feather name="info" color={Colors.White} size={30} />
          </View>
          <View style={styles.ProfileDetails}>
            <Text style={styles.Label}>About</Text>
            <Text style={styles.About}>Hey There Iam using the appp</Text>
          </View>
        </View>
        <View style={[common.FlexBox]}>
          <View style={styles.ProfileIcon}>
            <Feather name="phone" color={Colors.White} size={30} />
          </View>
          <View style={styles.ProfileDetails}>
            <Text style={styles.Label}>Phone</Text>
            <Text style={styles.Username}>+91 9605509169</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 20,
  },
  ProfileForm: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  ProfileIcon: {
    marginRight: 20,
  },
  ProfileDetails: {},
  Label: {
    color: Colors.LightGrey,
    fontSize: 15,
  },
  Username: {
    fontSize: 20,
    color: Colors.White,
    fontWeight: "bold",
  },
  Description: {
    color: Colors.LightGrey,
    fontSize: 14,
    marginTop: 10,
  },
  About: {
    fontSize: 16,
    color: Colors.White,
  },
});
