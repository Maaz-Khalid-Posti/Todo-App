// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAtV0Jmysgx1d5fX9lzIu7ePWYm29VVArc",
    authDomain: "todo-game-37917.firebaseapp.com",
    projectId: "todo-game-37917",
    storageBucket: "todo-game-37917.appspot.com",
    messagingSenderId: "748560580553",
    appId: "1:748560580553:web:e88c192d5948fc30cb7218",
    measurementId: "G-F38BPGB8W1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let todomain = document.getElementById('todomain');
    let loginmain = document.getElementById('loginmain');
    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User logged in successfully:', user);
            alert('User logged in successfully!');
            window.location.href = 'Todo.html';
            // Redirect to home page or wherever needed
            // window.location.href = 'index.html';
        })
        .catch((error) => {
            var errorMessage = error;
            console.error('Login failed:', errorMessage);
            alert(errorMessage);
        });
});
