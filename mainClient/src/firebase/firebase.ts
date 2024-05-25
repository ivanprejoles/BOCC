// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "business-owners-credit-coop.firebaseapp.com",
  projectId: "business-owners-credit-coop",
  storageBucket: "business-owners-credit-coop.appspot.com",
  messagingSenderId: "933993326004",
  appId: "1:933993326004:web:e31b34c817f2efd81cbee1",
  measurementId: "G-DTYT8J624J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {
    auth,
    provider
}

// const analytics = getAnalytics(app);