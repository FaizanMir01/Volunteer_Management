import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged   } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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
const auth = getAuth();

// Add this observer to track changes in user authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
  } else {
    console.log('User is signed out');
  }
});

// New Registration code start	 
document.getElementById("register-button").addEventListener("click", function(){
  const regisEmail = document.getElementById("register-email").value;
  const regisPassword = document.getElementById("register-password").value;
  createUserWithEmailAndPassword(auth, regisEmail, regisPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(error);
    });
});

// Login code
document.getElementById("login-button").addEventListener("click", function() {
  var loginEmail =  document.getElementById("login-email").value;
  var loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "/Home";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  
});


