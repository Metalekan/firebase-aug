import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_nNo632SlzTZ0tkym9FMvWio5SkCDSvc",
  authDomain: "react-firebase-aug.firebaseapp.com",
  projectId: "react-firebase-aug",
  storageBucket: "react-firebase-aug.appspot.com",
  messagingSenderId: "143454018323",
  appId: "1:143454018323:web:a8ef2e14dbe57d0a5318e6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
    })
    .catch((error) => {
      console.log(error);
    });
};
