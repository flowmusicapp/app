import {
  CONFIRM_OTP_REQUEST, CONFIRM_OTP_SUCCESS, CONFIRM_OTP_FAILURE,
  VERIFY_OTP_REQUEST, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAILURE} from '../actionTypes/Auth'

const initialState = {
    confirmation: null,
    loading: false,
    user: null
  }
  
  const ContactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case VERIFY_OTP_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        confirmation: action.payload,
        loading: false,
      }
      case VERIFY_OTP_FAILURE:
      return {
        ...state,
        loading: false,
      }
      case CONFIRM_OTP_REQUEST:
      return {
        ...state,
        loading: true,
      }
      case CONFIRM_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
      case CONFIRM_OTP_FAILURE:
      return {
        ...state,
        loading: false,
      }

      default:
        return state
    }
  }
  
  export default ContactsReducer
  