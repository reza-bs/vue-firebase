import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAoQTu1FG-J0ht3VHaL5Ykgr43-0ZNmGs0",
  authDomain: "vue-firebase-practice-5bed5.firebaseapp.com",
  databaseURL:
    "https://vue-firebase-practice-5bed5-default-rtdb.firebaseio.com",
  projectId: "vue-firebase-practice-5bed5",
  storageBucket: "vue-firebase-practice-5bed5.appspot.com",
  messagingSenderId: "593313967494",
  appId: "1:593313967494:web:2c53806cb462f4663c1007",
};

firebase.initializeApp(config);

export default firebase.database();
