import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0ynsAaRLYbLU0oxoQlthE-FNctQHEt3o",
    authDomain: "flow-app-41981.firebaseapp.com",
    projectId: "flow-app-41981",
    storageBucket: "flow-app-41981.appspot.com",
    messagingSenderId: "139722804465",
    appId: "1:139722804465:web:f25728ee21c1377e662d50",
    measurementId: "G-VHQFY6NB0Z"
}


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default () => {
    return {firebase, auth}
}