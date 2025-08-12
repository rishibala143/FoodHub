import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyASuS_4lfAz3qei4aEcoDgQQcfN7MYWCt0",
    authDomain: "foodhub-5efbf.firebaseapp.com",
    projectId: "foodhub-5efbf",
    storageBucket: "foodhub-5efbf.appspot.com",
    messagingSenderId: "831378176970",
    appId: "1:831378176970:web:a1db277043722a12426d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Save user info and redirect
function saveUserInfoAndRedirect(user) {
    const userInfo = {
        name: user.displayName || user.email,
        email: user.email,
        photo: user.photoURL || "Images/profile photo.jpg"
    };
    localStorage.setItem("user", JSON.stringify(userInfo));
    window.location.href = "FoodHub.html";
}

// Handle Email/Password Sign-In
document.querySelector(".sign-in-btn").addEventListener("click", () => {
    const email = document.querySelectorAll(".two")[0].value.trim();
    const password = document.querySelectorAll(".two")[1].value;
    const rememberMe = document.getElementById("remember").checked;

    const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistence)
        .then(() => signInWithEmailAndPassword(auth, email, password))
        .then((userCredential) => {
            saveUserInfoAndRedirect(userCredential.user);
        })
        .catch((error) => {
            alert("Sign-in failed: " + error.message);
            console.error("Sign-in failed:", error);
        });
});

// Handle Google Sign-In
document.getElementById("google-signin-btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            saveUserInfoAndRedirect(result.user);
        })
        .catch((error) => {
            alert("Google Sign-In failed: " + error.message);
            console.error("Google Sign-In error:", error.message);
        });
});

// Auto-redirect if already signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        saveUserInfoAndRedirect(user);
    }
});

// Handle Forgot Password
document.getElementById("forgot-password-link").addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.querySelectorAll(".two")[0].value.trim();

    if (!email) {
        alert("Please enter your email in the input field to reset your password.");
        return;
    }

    try {
        console.log("Sending reset email to:", email);
        await sendPasswordResetEmail(auth, email);
        alert(" Password reset email sent. Please check your inbox.");
    } catch (error) {
        console.error(" Error sending reset email:", error.code, error.message);
        alert("Failed to send reset email: " + error.message);
    }
});
