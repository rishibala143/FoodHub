import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyASuS_4lfAz3qei4aEcoDgQQcfN7MYWCt0",
    authDomain: "foodhub-5efbf.firebaseapp.com",
    projectId: "foodhub-5efbf",
    storageBucket: "foodhub-5efbf.appspot.com",
    messagingSenderId: "831378176970",
    appId: "1:831378176970:web:a1db277043722a12426d33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Handler
document.getElementById("signup")?.addEventListener("click", () => {
    const email = document.querySelectorAll(".two")[0].value.trim();
    const password = document.querySelectorAll(".two")[1].value;
    const rememberMe = document.getElementById("remember")?.checked;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistence)
        .then(() => {
            return createUserWithEmailAndPassword(auth, email, password);
        })
        .then((userCredential) => {
            const user = userCredential.user;

            // Save minimal user info with fallback
            localStorage.setItem("userInfo", JSON.stringify({
                name: user.email,
                email: user.email,
                photo: "Images/profile photo.jpg"
            }));

            alert("Account created successfully!");
            window.location.href = "FoodHub.html";
        })
        .catch((error) => {
            alert("Signup failed: " + error.message);
            console.error("Signup Error:", error);
        });
});
