import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  CONFIRM_OTP_REQUEST, CONFIRM_OTP_SUCCESS, CONFIRM_OTP_FAILURE,
  VERIFY_OTP_REQUEST, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILURE} from '../actionTypes/Auth'



export const OtpVerification = (updated, navigation) => async (dispatch) => {
    dispatch({ type: VERIFY_OTP_REQUEST, })
    try{
      const confirmation = await auth().signInWithPhoneNumber(updated);
      navigation.navigate("OtpVerification")
      dispatch({ type: VERIFY_OTP_SUCCESS, payload: confirmation });
    }catch(e){
      dispatch({ type: VERIFY_OTP_FAILURE});
      console.log('OTP Verification Failed', e)
  }
  };


export const ConfirmOTP = (confirmation, otpVal) => async (dispatch) => {
  console.log('otpVal', otpVal)
    dispatch({ type: CONFIRM_OTP_REQUEST});
  try{
      const response = await confirmation.confirm(otpVal.toString())
      if(response){
        dispatch({ type: CONFIRM_OTP_SUCCESS, payload: response});
        await AsyncStorage.setItem('User', JSON.stringify(response))
      }
    } catch(e){
      dispatch({ type: CONFIRM_OTP_FAILURE})
      console.log("Auth Failed Please try with valid OTP",e)
    }
};


