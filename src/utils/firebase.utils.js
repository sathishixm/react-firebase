import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import { getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDaBFAuh78vcTTH7YJNiZOUbqFr6Ide5qU",
    authDomain: "crwn-clothing-db-3a9c7.firebaseapp.com",
    projectId: "crwn-clothing-db-3a9c7",
    storageBucket: "crwn-clothing-db-3a9c7.appspot.com",
    messagingSenderId: "95780157243",
    appId: "1:95780157243:web:926e8901024406d1cfa91e",
    measurementId: "G-FY440F84EH"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt});
            console.log('User created successfully');
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userDocRef;
  }