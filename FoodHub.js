//search suggestion


const foodItems = [

    //North

    { name: "Buttery Naan", id: "buttery-naan" },
    { name: "Butter Chicken", id: "butter-chicken" },
    { name: "Paneer Butter Masala", id: "paneer-butter-masala" },
    { name: "Tandoori Chicken", id: "tandoori-chicken" },
    { name: "Aloo Tikki Chaat", id: "aloo-tikki-chaat" },
    { name: "Daal Makhni", id: "daal-makhni" },
    { name: "Seekh Kebab", id: "seekh-kebab" },
    
    //South
    
    { name: "Idly", id: "idly" },
    { name: "Masala Dosai", id: "masala-dosai" },
    { name: "Appam", id: "appam" },
    { name: "Chicken Biryani", id: "chicken-biryani" },
    { name: "Chicken Curry", id: "chicken-curry" },
    { name: "Meen Pollichathu", id: "meen-pollichathu" },
    { name: "Bisi Bele Bath", id: "bisi-bele-bath" },
    { name: "Aviyal", id: "aviyal" },
    
    //Chinese
    
    { name: "Schezwan Noodles", id: "schezwan-noodles" },
    { name: "Chicken Lollipop", id: "chicken-lollipop" },
    { name: "Chilli Chicken", id: "chilli-chicken" },
    { name: "Fried Rice", id: "fried-rice" },
    { name: "Spring Rolls", id: "spring-rolls" },
    { name: "Hot Sour Soup", id: "hot-sour-soup" },
    { name: "Kung Pao Chicken", id: "kung-pao-chicken" },
    
    //Italian
    
    { name: "Penne Arrabbiata", id: "penne-arrabbiata" },
    { name: "Spaghetti Aglio E Olio", id: "spaghetti-aglio-e-olio" },
    { name: "Pizza Margherita", id: "pizza-margherita" },
    { name: "Fettuccine Alfredo", id: "fettuccine-alfredo" },
    { name: "Insalata Caprese", id: "insalata-caprese" },
    { name: "Creamy Mushroom Risotto", id: "creamy-mushroom-risotto" },
    { name: "Bruschetta Al Pomodoro", id: "bruschetta-al-pomodoro" },
    { name: "Lasagna", id: "lasagna" },
    
    //Desert
    
    { name: "Gulab Jamun", id: "gulab-jamun" },
    { name: "Carrot Halwa", id: "carrot-halwa" },
    { name: "Jalebi Rabri", id: "jalebi-rabri" },
    { name: "Kulfi", id: "kulfi" },
    { name: "Payasam", id: "payasam" },
    { name: "Rasamalai", id: "rasamalai" },
    { name: "Mishti Dol", id: "mishti-dol" },
    
    //Drinks
    
    { name: "Blue Lagoon", id: "blue-lagoon" },
    { name: "Sweet Lassi", id: "sweet-lassi" },
    { name: "Tender Coconut Water", id: "tender-coconut-water" },
    { name: "Strawberry Milkshake", id: "strawberry-milkshake" },
    { name: "Virgin Mojito", id: "virgin-mojito" },
    { name: "Cold Coffee", id: "cold-coffee" },
    { name: "Thandai", id: "thandai" }
];

const searchBox = document.querySelector('.search-box');
const suggestionList = document.getElementById('suggestions');
const searchButton = document.querySelector('.search-btn');

// Show suggestions while typing

searchBox.addEventListener('input', () => {
    const inputValue = searchBox.value.toLowerCase().trim();
    suggestionList.innerHTML = '';

    if (inputValue === '') return;

    const filtered = foodItems.filter(item => item.name.toLowerCase().includes(inputValue));

    if (filtered.length === 0) {
        const li = document.createElement('li');
        li.textContent = "Food is not available";
        li.style.color = 'gray';
        li.style.cursor = 'default';
        suggestionList.appendChild(li);
        return;
    }

    filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.addEventListener('click', () => {
            searchBox.value = item.name;
            suggestionList.innerHTML = '';
        });
        suggestionList.appendChild(li);
    });
});

// Handle "Search" button click

searchButton.addEventListener('click', () => {
    const inputValue = searchBox.value.toLowerCase().trim();
    const match = foodItems.find(item => item.name.toLowerCase() === inputValue);

    if (match) {
        const target = document.getElementById(match.id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            suggestionList.innerHTML = '';
            searchBox.value = '';
        }
    } else {
        alert("Food item not found.");
    }
});

// Allow Enter key to trigger search

searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('search-box')) {
        suggestionList.innerHTML = '';
    }
});


//signin to profile


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

const authArea = document.getElementById("auth-area");
const cartArea = document.getElementById("cart-area");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const userInfo = {
      name: user.displayName || user.email,
      email: user.email,
      photo: user.photoURL || "Images/profile photo.jpg"
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    authArea.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${userInfo.photo}" alt="Profile" style="width: 30px; border-radius: 50%;">
        <span style="color: #ea580c; font-weight: 500; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${userInfo.name}
        </span>
        <button id="logout-btn" style="border: none; background: transparent; color: #dc2626; cursor: pointer;">Logout</button>
      </div>
    `;
    
    document.getElementById("logout-btn").addEventListener("click", () => {
      signOut(auth).then(() => {
        localStorage.removeItem("userInfo");
        location.reload();
      });
    });

    // Move cart position after login

    if (cartArea) {
      cartArea.style.position = "absolute";
      cartArea.style.right = "370px";
    }

  } else {

    // Not signed in
    
    localStorage.removeItem("userInfo");
    authArea.innerHTML = `<a href="signin.html" class="signin-btn" id="default-signin">Sign In</a>`;

    // Move cart position to default before login
    
    if (cartArea) {
      cartArea.style.position = "absolute";
      cartArea.style.right = "300px";
    }
  }
});


//foodcard movable


function setupCarousel(carouselId, leftBtnId, rightBtnId, cardWidth = 280) {
    const carousel = document.getElementById(carouselId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    let currentIndex = 0;

    function getVisibleCardCount() {
        const containerWidth = carousel.parentElement.offsetWidth;
        return Math.floor(containerWidth / cardWidth);
    }

    function updateCarousel() {
        const containerWidth = carousel.parentElement.offsetWidth;
        const totalScrollWidth = carousel.scrollWidth;
        const maxScrollX = totalScrollWidth - containerWidth;

        const scrollX = currentIndex * cardWidth;

        carousel.style.transform = `translateX(-${Math.min(scrollX, maxScrollX)}px)`;
    }

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightBtn.addEventListener('click', () => {
        const maxScrollIndex = Math.max(0, carousel.children.length - getVisibleCardCount());
        if (currentIndex < maxScrollIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
}

setupCarousel('carousel-north', 'leftBtn-north', 'rightBtn-north');
setupCarousel('carousel-south', 'leftBtn-south', 'rightBtn-south');
setupCarousel('carousel-chinese', 'leftBtn-chinese', 'rightBtn-chinese');
setupCarousel('carousel-italian', 'leftBtn-italian', 'rightBtn-italian');
setupCarousel('carousel-desert', 'leftBtn-desert', 'rightBtn-desert');
setupCarousel('carousel-drinks', 'leftBtn-drinks', 'rightBtn-drinks');