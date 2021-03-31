import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	TouchableOpacity,
	Platform,
	BackHandler,
  ActivityIndicator
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
const deviceWidth = Dimensions.get('screen');
import { Colors } from "../../utils/Color";
import { useDispatch, useSelector } from 'react-redux';
import FlowButton from "../../components/ux/Button";
import auth from '@react-native-firebase/auth'
import { ConfirmOTP } from '../../store/actions/Auth'



const OtpVerification = ({ navigation, route }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [otpVal, setOtpVal] = useState("");
  const dispatch = useDispatch();

  const { confirmation, loading } = useSelector(state => state.AuthReducer)

  
   
  const handleConfirmOtp = () => {
		if (otpVal.length == 6) {
			dispatch(ConfirmOTP(confirmation, otpVal, navigation))
		} else console.log('Inavlid OTP')
	};


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
  }
  if (initializing) return null;

	return (
    <SafeAreaView style={styles.container}>
       {loading ?
        <View style={{ flex: 1, justifyContent: "center"}}>
			    <ActivityIndicator size="large" color="black" />
      	</View> :
        <>
        <View style={{ flex: 0.15 }}>
      {/* <Image
        source={Mobile}
        style={{ width: 70, height: 70, resizeMode: 'contain' }}
      /> */}
    </View>
    <View
      style={{
        flex: 0.15,
        marginTop: Platform.OS === 'ios' ? null : 20,
      }}
    >
      <Text style={styles.screenTitle}>OTP Verification</Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#555555',
          paddingHorizontal: 50,
          paddingTop: 10,
        }}
      >
        Enter the OTP sent to your registered Email address
      </Text>
    </View>
    <View
      style={{
        flex: 0.1,
        marginTop: Platform.OS === 'ios' ? null : 20,
        
      }}
    >
      <CodeInput
        activeColor="black"
        inactiveColor="black"
        autoFocus={true}
        codeLength={6}
        inputPosition="center"
        keyboardType="numeric"
        size={50}
        onFulfill={(text) => setOtpVal(text)}
        containerStyle={{ marginTop: 30 }}
        codeInputStyle={{
          borderWidth: 1.5,
          width: 40,
          borderRadius: 10,
          borderColor: '#D3D3D3',
        }}
      />
    </View>

    <View
      style={{
        flex: 0.1,
        marginTop: Platform.OS === "ios" ? null : 20,
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>If you didn't receive a code!</Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => handleResendOtp()}
        >
          <Text style={{ color: "#0065ff" }}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View
      style={{ flex: 0.2, marginTop: Platform.OS === "ios" ? null : 20 }}
    >
      <FlowButton
        // disabled={otpLoader}
        onPress={() => handleConfirmOtp()}
        // title={otpLoader ? "Loading..." : "Confirm OTP"}
        title={'Confirm OTP'}
      />
    </View>
    </>
    }

  </SafeAreaView>
	);
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    width: deviceWidth.width,
    backgroundColor: 'white',
  },
  customTextInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: deviceWidth.width / 1.2,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#707070",
    marginBottom: 30,
  },
  flexBox: {
    flexDirection: "row",
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  icon: {
    marginRight: 7,
  },
  forgotPasswordText: {
    color: "#707070",
  },
  otpBoxesContainer: {
    flexDirection: "row",
  },
  otpBox: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
    height: 45,
    width: 45,
    textAlign: "center",
  },
});

export default OtpVerification;
