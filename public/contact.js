import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAUKXYyOZdnK-czQLhETzTMBzaXMxnDHkw",
    authDomain: "volunteer-management-cd049.firebaseapp.com",
    databaseURL: "https://volunteer-management-cd049-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "volunteer-management-cd049",
    storageBucket: "volunteer-management-cd049.appspot.com",
    messagingSenderId: "624344047699",
    appId: "1:624344047699:web:0056d053b4b75cb4cae6a6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
  } else {
    console.log('User is signed out');
  }
});

let contactInfo = ref(db, "infos");

// Listen for a submit
document.querySelector(".formdetails").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get input Values
  let name = document.querySelector("#Fullname").value;
  let email = document.querySelector("#emailid").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#Mess").value;

  saveContactInfo(name, email, message,subject);

  document.querySelector(".formdetails").reset();

  alert("Form submitted successfully! You will get response within 2-3 working days ");
}

// Save infos to Firebase
function saveContactInfo(name, email, message,subject) {
  let newContactInfo = push(contactInfo);

  set(newContactInfo, {
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}