// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpdCFrEs3jlJ55FLHyDfkMhVCnJllJh64",
  authDomain: "sastabazar-2e277.firebaseapp.com",
  projectId: "sastabazar-2e277",
  storageBucket: "sastabazar-2e277.appspot.com",
  messagingSenderId: "294146848625",
  appId: "1:294146848625:web:5fb720b49f1b02056968d0",
  measurementId: "G-XXP8V4V0VE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

window.loginUser = () => {
  let obj = {
    email: email.value,
    password: password.value,
  };
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
      const id = res.user.uid;
      const refernce = doc(db, "users", id);
      const snap = await getDoc(refernce);
      if (snap.exists()) {
        localStorage.setItem("user", JSON.stringify(snap.data()));
        window.location.replace("../../index.html");
      } else {
        alert("Data Not Found");
      }
    })
    .catch((err) => {
      alert(err.message);
    });
};
