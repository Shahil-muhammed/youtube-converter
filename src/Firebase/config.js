import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDbpLx_Z6aFoBYAsYeYyOSOh2B5qRaf4-Q",
    authDomain: "mp3converter-fff4a.firebaseapp.com",
    projectId: "mp3converter-fff4a",
    storageBucket: "mp3converter-fff4a.appspot.com",
    messagingSenderId: "193692734960",
    appId: "1:193692734960:web:c8bb7fff12264803d6b935",
    measurementId: "G-ERW39LMLC4"
  };
export default  firebase.initializeApp(firebaseConfig)