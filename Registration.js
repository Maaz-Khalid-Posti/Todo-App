// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Register the user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User registered successfully:', user);
            alert('User registered successfully!');
            // Redirect to login page
            window.location.href = 'index.html';
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.error('Registration failed:', errorMessage);
            alert(errorMessage);
        });
});
