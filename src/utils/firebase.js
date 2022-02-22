import {initializeApp} from "firebase/app";
// import 'firebase/remote-config';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBPw_BwYohci_NIuyZd76NcG_Ies_29kSw",

  authDomain: "mmt-3-9f8f4.firebaseapp.com",

  projectId: "mmt-3-9f8f4",

  storageBucket: "mmt-3-9f8f4.appspot.com",

  messagingSenderId: "605909672044",

  appId: "1:605909672044:web:ce73f4178d942e96ae7849"

};


const firebase = initializeApp(firebaseConfig);
// Initialize Firebase


export default firebase;