import {
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { Colors } from "../../utils/Color";
import { Controller, useForm } from "react-hook-form";
import { OtpVerification } from '../../store/actions/Auth'
import { useDispatch, useSelector } from 'react-redux';
import CountryPicker from 'react-native-country-picker-modal'
import CountrySelector from './CountrySelector'




const deviceWidth = Dimensions.get("window").width;
var NintyPercentage = (83 / 100) * deviceWidth;

const SignupScreen = ({ navigation }) => {

const [countryCode, setCountryCode] = useState()
const [country, setCountry] = useState(null)
const [withFilter, setWithFilter] = useState(true)
const [withCallingCode, setWithCallingCode] = useState(true)

  const dispatch = useDispatch(); 
  const { control, handleSubmit, errors } = useForm();
  

  const onSubmit = async (data) => {
    let updated = "+91" + data.phone.toString()
    console.log('phone', updated)
    dispatch(OtpVerification(updated, navigation))
  };

  
  const countryShortCode = CountrySelector()


  const onSelect = (country) => {
    setCountry(country)
    console.log('country',country)
  }

console.log('withCallingCode', country)

const { loading } = useSelector(state => state.AuthReducer)

  return (
    <SafeAreaView style={styles.container}>
  
        <View style={{ flex: 0.2 }}>
          <Image style={{ height: 80, width: 150 }} />
        </View>

        <View
          style={{ flex: 0.2, marginTop: Platform.OS === "ios" ? null : 20 }}
        >
          <Text style={styles.screenTitle}>Verify Phone Number  </Text>
          <Text style={styles.confirmationMsg}>
            We will send a SMS with a confirmation code to your phone number.
          </Text>
        </View>
        <View style={styles.inputParentContainer}>
          
            <View style={styles.customTextInput}>
              <View style={styles.flexBox}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* <CountryPicker
                      {...{
                        countryCode,
                        withCallingCode,
                        withFilter,
                        onSelect,
                      }}
                      visible
                    /> */}
                    <Text style={{ fontSize: 15, marginRight: 10 }}>+91</Text>
                    
                  </View>
                  <View style={{ width: "100%" }}>
                    <Controller
                      control={control}
                      name="phone"
                      render={({ onChange, onBlur, value }) => (
                        <TextInput
                          style={{ width: "100%", height: "100%" }}
                          keyboardType="number-pad"
                          onBlur={onBlur}
                          onChangeText={(value) => onChange(value)}
                          value={value}
                          placeholder='Phone Number'
                          
                        />
                      )}
                      rules={{
                        required: "Phone is Required",
                        pattern: {
                          value: /^[0-9\b]+$/,
                          message: "Invalid phone number",
                        },
                      }}
                      defaultValue=""
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              {errors.phone && (
                <Text style={{ color: "red" }}>{errors.phone.message}</Text>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <Button
                color='black'
                title="Submit "
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          
        </View>
        
        
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    width: deviceWidth.width,
  },
  customTextInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    width: NintyPercentage,
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    marginBottom: Platform.OS === "ios" ? 20 : 5,
  },
  inputParentContainer: {
    flex: 0.5,
    marginBottom: 10,
    marginTop: Platform.OS === "ios" ? null : 30,
  },
  confirmationMsg: {
    textAlign: "center",
    fontSize: 16,
    color: "#555555",
    paddingHorizontal: 50,
    paddingTop: 20,
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "73%",
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  icon: {
    marginRight: 7,
    color: Colors.PrimaryColor,
  },
  forgotPasswordText: {
    color: "#707070",
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: Colors.PrimaryColor,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },
});

export default SignupScreen;



