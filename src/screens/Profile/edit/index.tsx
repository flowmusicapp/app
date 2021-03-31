import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-crop-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import Header from "../../../components/Header";
import TextField from "../../../components/ux/TextField";
import { updateProfile } from "../../../store/actions/App";
import common from "../../../styles/common";
import { Colors } from "../../../utils/Color";

const EditProfile = () => {
  const { control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const refRBSheet: any = useRef();
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    dispatch(updateProfile(data));
    navigation.navigate("HomeTabs");
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  return (
    <ScrollView style={[common.PageLayout]}>
      <Header
        name="Edit Profile"
        backArrow={true}
        onPressBack={() => navigation.navigate("HomeTabs")}
      />
      <View style={[styles.ProfileForm]}>
        <View
          style={[common.FlexBox, common.ItemsCenter, common.JustifyCenter]}
        >
          <Image
            style={styles.Avatar}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5jy_fadogCIB3Oage4sW-oVwwIJ6d24jZg&usqp=CAU",
            }}
          />
          <TouchableOpacity
            style={styles.Camera}
            onPress={() => refRBSheet.current.open()}
          >
            <Feather name="camera" color="#fff" size={25} />
          </TouchableOpacity>
        </View>
        <Controller
          control={control}
          name="name"
          render={({ onChange, onBlur, value }) => (
            <TextField
              label="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name ? errors.name.message : ""}
            />
          )}
          rules={{
            required: "First Name is Required",
          }}
          defaultValue=""
        />

        <Controller
          control={control}
          name="about"
          render={({ onChange, onBlur, value }) => (
            <TextField
              style={{ height: 90 }}
              label="About"
              onBlur={onBlur}
              multiLine={true}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.about ? errors.about.message : ""}
            />
          )}
          rules={{
            required: "Email is Required",
          }}
          defaultValue=""
        />

        <View style={[common.PrimaryButton, { width: "100%" }]}>
          <Button title="Save" onPress={handleSubmit(onSubmit)} color="#fff" />
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          draggableIcon: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <View>
          <TouchableOpacity onPress={openCamera}>
            <Text>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 20 }} onPress={openGallery}>
            <Text>Open Gallery</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  ProfileForm: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  Avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 20,
  },
  Camera: {
    position: "absolute",
    top: 40,
    fontSize: 20,
    backgroundColor: Colors.SecondaryColor,
    width: 50,
    height: 50,
    borderColor: Colors.White,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    zIndex: 1001,
    right: 20,
  },
});
