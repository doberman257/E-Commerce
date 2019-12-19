import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkJjLp_2BIu1wn3YVLUTaZmeUX5XtKwek",
    authDomain: "e-commerce-5d918.firebaseapp.com",
    databaseURL: "https://e-commerce-5d918.firebaseio.com",
    projectId: "e-commerce-5d918",
    storageBucket: "e-commerce-5d918.appspot.com",
    messagingSenderId: "43580346683",
    appId: "1:43580346683:web:c370e275b7c605e94a671e",
    measurementId: "G-7B2VSE0HJV"
  };

  export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propmt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;