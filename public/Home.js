const joinEventButton = document.querySelector('.join-event');
const joinCountElement = document.querySelector('#jionCount');

joinEventButton.addEventListener('click', () => {
  // Display an alert box asking the user if they want to join the event.
  const confirmAlert = confirm('Are you sure you want to join this event?');

  // If the user clicks yes, increase the join count.
  if (confirmAlert) {
    let joinCount = parseInt(joinCountElement.textContent);
    joinCount++;
    joinCountElement.textContent = joinCount;
  }
});
/**for logout ***/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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

document.getElementById("signOut").addEventListener("click", function() {
    signOut(auth)
      .then(() => {
        console.log("signOut")
        window.location.href = '/';
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        alert(error.message);
      });
  });
  




  
