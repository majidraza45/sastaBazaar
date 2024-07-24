// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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

let loginLink = document.getElementById("loginLink");
let uploadLink = document.getElementById("uploadLink");
let signupLink = document.getElementById("signupLink");
let logoutBtn = document.getElementById("logoutBtn");

function init() {
  let userObj = localStorage.getItem("user");
  userObj = JSON.parse(userObj);

  if (userObj) {
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    if (userObj.userType === "user") {
      uploadLink.style.display = "none";
    }
    logoutBtn.className =
      "text-white mx-4 inline-block bg-blue-500 p-2 rounded";
  }
}
init();

window.logout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("user");
      init();
    })
    .catch((err) => {
      alert(err.message);
    });
};
