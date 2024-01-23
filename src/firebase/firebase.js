import {initializeApp} from 'firebase/app'
import {getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const config={
    apiKey: "AIzaSyC5n48yyumjLcMBPTvVLrfz_KuqJbL6Ko8",
    authDomain: "crown-db-cc1d4.firebaseapp.com",
    projectId: "crown-db-cc1d4",
    storageBucket: "crown-db-cc1d4.appspot.com",
    messagingSenderId: "1008483335154",
    appId: "1:1008483335154:web:5094a0929350fa2f51496b",
    measurementId: "G-TT6W10N8RB"
}
const firebaseApp= initializeApp(config)
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };
  
  export { auth, firestore, provider, signInWithGoogle, firebaseApp as default }