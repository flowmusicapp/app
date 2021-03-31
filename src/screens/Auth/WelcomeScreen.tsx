import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import ImageSlider from "react-native-image-slider";
import FlowButton from "../../components/ux/Button";
import TextAnimator from "../../components/ux/TextAnimator";
import common from "../../styles/common";
import { Colors } from "../../utils/Color";
import Music from "../../assets/icons/logo.png";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const images = ["", ""];
  return (
    <View style={[common.Fit, { backgroundColor: Colors.SecondaryColor }]}>
      <View
        style={[
          common.FlexBox,
          common.ItemsCenter,
          common.JustifyCenter,
          common.FlexCol,
          {
            width: Dimensions.get("window").width,
            height: "35%",
          },
        ]}
      >
        <Image source={Music} style={styles.Logo} />
        <TextAnimator content="Flow" textStyle={styles.Brand} duration={2000} />
        <TextAnimator
          content="Flow your music"
          textStyle={styles.Tag}
          duration={2000}
          delay={1000}
        />
      </View>
      <ImageSlider
        loop={false}
        images={images}
        customSlide={({ index, item }: any) => (
          <View
            key={index}
            style={{
              width: Dimensions.get("window").width,
              height: "100%",
              backgroundColor: Colors.SecondaryColor,
            }}
          >
            {index === 0 && (
              <Slider
                title="Find Music"
                desc="Lorem ipsum dolor sit amet, consectetur i dolor sit amet, consectetur i"
                buttonText="Next"
                index={index}
              />
            )}
            {index === 1 && (
              <Slider
                title="Flow Your Music"
                desc="Lorem ipsum dolor sit amet sit amet sit amet"
                buttonText="Get Started"
                index={index}
              />
            )}
          </View>
        )}
      />
      <FlowButton
        title="GET STARTED"
        onPress={() => navigation.navigate("SignupScreen")}
        style={styles.ButtonStyle}
      ></FlowButton>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  SliderHead: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.White,
    marginBottom: 10,
  },
  SliderDesc: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
    color: Colors.White,
    maxWidth: 350,
    marginBottom: 10,
  },
  Brand: {
    fontSize: 35,
    fontWeight: "700",
    color: Colors.PrimaryColor,
    textTransform: "uppercase",
    marginBottom: 10,
    marginTop: 10,
  },
  Tag: {
    fontSize: 25,
    color: Colors.White,
  },
  Logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    marginTop: 10,
  },
  ButtonStyle: {
    width: Dimensions.get("window").width,
    height: 60,
    borderRadius: 0,
  },
});

function Slider({ title, desc, buttonText, index }: any) {
  return (
    <View
      style={[
        common.FlexBox,
        common.FlexCol,
        common.JustifyEnd,
        common.ItemsCenter,
        common.Fit,
        { paddingBottom: 30 },
      ]}
    >
      <Text style={styles.SliderHead}>{title}</Text>
      <Text style={styles.SliderDesc}>{desc}</Text>
    </View>
  );
}
