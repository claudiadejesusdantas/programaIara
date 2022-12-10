import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3JxHPi9N3uQcbWtSC9Q_Jf6sUIkWld4g",
  authDomain: "programaiara.firebaseapp.com",
  projectId: "programaiara",
  storageBucket: "programaiara.appspot.com",
  messagingSenderId: "88663983751",
  appId: "1:88663983751:web:d02d922186b53dce1d1a22",
  measurementId: "G-2QE9YLL4GE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);