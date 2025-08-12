let cart = JSON.parse(localStorage.getItem('foodhub-cart')) || [];

// Sample food data for demonstration
const foodData = {

    // North Indian Foods

    'north-1': { id: 'north-1', name: 'Buttery Naan', price: 150, image: 'Images/North/buttery_naan.jpeg', rating: 4.8, description: 'Soft, fluffy naan brushed with melted butter for rich, irresistible flavor.' },
    'north-2': { id: 'north-2', name: 'Butter Chicken', price: 280, image: 'Images/North/butter_chicken.jpeg', rating: 4.7, description: 'Butter chicken with tender chicken pieces simmered in a creamy, spiced tomato gravy.' },
    'north-3': { id: 'north-3', name: 'Paneer Butter Masala', price: 270, image: 'Images/North/paneer_butter_masala.jpeg', rating: 4.9, description: 'Soft paneer cubes simmered in a rich, creamy tomato-based gravy with buttery spices.' },
    'north-4': { id: 'north-4', name: 'Tandoori Chicken', price: 290, image: 'Images/North/tandoori_chicken.jpeg', rating: 4.8, description: 'Juicy chicken marinated in spiced yogurt and roasted to perfection in a tandoor.' },
    'north-5': { id: 'north-5', name: 'Aloo Tikki Chaat', price: 240, image: 'Images/North/aloo_tikki_chaat.jpeg', rating: 4.4, description: 'Crispy aloo tikki topped with tangy chutneys, creamy yogurt, and flavorful spices.' },
    'north-6': { id: 'north-6', name: 'Daal Makhni', price: 260, image: 'Images/North/daal_makhni.jpeg', rating: 4.3, description: 'Slow-cooked black lentils in a creamy, buttery gravy infused with rich spices.' },
    'north-7': { id: 'north-7', name: 'Seekh Kebab', price: 200, image: 'Images/North/seekh_kebab.jpeg', rating: 4.4, description: 'Minced meat blended with spices, shaped onto skewers, and grilled to smoky perfection.' },

    // South Indian Foods

    'south-1': { id: 'south-1', name: 'Idly', price: 90, image: 'Images/South/idli.jpeg', rating: 4.9, description: 'Steamed, pillowy idlies served warm, perfect for soaking up rich, flavorful sambar.' },
    'south-2': { id: 'south-2', name: 'Masala Dosai', price: 100, image: 'Images/South/masala_dosai.jpeg', rating: 4.8, description: 'Golden, crispy masala dosai filled with spiced potato, served with chutneys and sambar.' },
    'south-3': { id: 'south-3', name: 'Appam', price: 120, image: 'Images/South/appam.jpeg', rating: 4.7, description: 'Light, lacy appam with a soft center, perfect for pairing with rich coconut milk or stew.' },
    'south-4': { id: 'south-4', name: 'Chicken Biryani', price: 240, image: 'Images/South/chicken_biryani.jpeg', rating: 4.9, description: 'Fragrant layered with tender meat and spices, cooked to perfection in aromatic basmati rice.' },
    'south-5': { id: 'south-5', name: 'Chicken Curry', price: 180, image: 'Images/South/chicken_curry.jpeg', rating: 4.7, description: 'Succulent chicken simmered in a rich, spiced gravy for a hearty and comforting curry experience.' },
    'south-6': { id: 'south-6', name: 'Meen Pollichathu', price: 320, image: 'Images/South/meen_pollichathu.jpeg', rating: 4.9, description: 'Delicately spiced fish wrapped in banana leaf and pan-seared for smoky, authentic Kerala flavor.' },
    'south-7': { id: 'south-7', name: 'Bisi Bele Bath', price: 260, image: 'Images/South/bisi_bele_bath.jpeg', rating: 4.3, description: 'Hot and hearty made with lentils, rice, and vegetables simmered in bold South Indian spices.' },
    'south-8': { id: 'south-8', name: 'Aviyal', price: 200, image: 'Images/South/aviyal.jpeg', rating: 4.4, description: 'Medley of seasonal vegetables in a creamy coconut-yogurt gravy, with curry leaves and coconut oil.' },

    // Chinese Foods
    
    'chinese-1': { id: 'chinese-1', name: 'Schezwan Noodles', price: 180, image: 'Images/Chinese/schezwan_noodles.jpeg', rating: 4.5, description: 'Delicious spicy noodles with tender chicken pieces, vegetables, and aromatic spices.' },
    'chinese-2': { id: 'chinese-2', name: 'Chicken Lollipop', price: 220, image: 'Images/Chinese/chicken_lollipop.jpeg', rating: 4.6, description: 'Delicious fried and sauced chicken wings bursting with flavor and spice.' },
    'chinese-3': { id: 'chinese-3', name: 'Chilli Chicken', price: 200, image: 'Images/Chinese/chilli_chicken.jpeg', rating: 4.7, description: 'Hot and tangy chicken tossed with peppers and onions in Indo-Chinese style.' },
    'chinese-4': { id: 'chinese-4', name: 'Veg Fried Rice', price: 150, image: 'Images/Chinese/fried_rice.jpeg', rating: 4.3, description: 'Stir-fried rice with crunchy vegetables and subtle Chinese flavors.' },
    'chinese-5': { id: 'chinese-5', name: 'Spring rolls', price: 230, image: 'Images/Chinese/spring_rolls.jpeg', rating: 4.7, description: 'Crispy golden rolls stuffed with seasoned veggies, served with a sweet and spicy dipping sauce.' },
    'chinese-6': { id: 'chinese-6', name: 'Hot Sour Soup', price: 180, image: 'Images/Chinese/hot_sour_soup.jpeg', rating: 4.3, description: 'A flavorful Indo-Chinese soup with a spicy and sour kick, loaded with vegetables and tofu.' },
    'chinese-7': { id: 'chinese-7', name: 'Kung Pao Chicken', price: 220, image: 'Images/Chinese/kung_pao_chicken.jpeg', rating: 4.7, description: 'Classic Chinese stir-fry with tender chicken, crunchy peanuts, and veggies tossed in a spicy, tangy sauce.' },

    // Italian Foods

    'italian-1': { id: 'italian-1', name: 'Penne Arrabbiata', price: 260, image: 'Images/italian/penne_arrabbiata.jpeg', rating: 4.8, description: 'Fiery penne pasta tossed in bold, garlicky tomato sauce — simple, spicy, and satisfying.' },
    'italian-2': { id: 'italian-2', name: 'Spaghetti Aglio E Olio', price: 250, image: 'Images/italian/spaghetti_aglio_e_olio.jpeg', rating: 4.8, description: 'Golden spaghetti sautéed in garlic and olive oil, with a hint of chili for a bold, clean flavor.' },
    'italian-3': { id: 'italian-3', name: 'Pizza Margherita', price: 250, image: 'Images/italian/pizza_margherita.jpeg', rating: 4.8, description: 'Classic Margherita pizza with melted mozzarella, fresh basil, and tomato sauce on a crisp crust.' },
    'italian-4': { id: 'italian-4', name: 'Fettuccine Alfredo', price: 220, image: 'Images/italian/fettuccine_alfredo.jpeg', rating: 4.6, description: 'Velvety fettuccine coated in a luscious Alfredo sauce, smooth and buttery with every twirl.' },
    'italian-5': { id: 'italian-5', name: 'Insalata Caprese', price: 210, image: 'Images/italian/insalata_caprese.jpeg', rating: 4.7, description: 'Fresh mozzarella and ripe tomato slices drizzled with olive oil, finished with fragrant basil.' },
    'italian-6': { id: 'italian-6', name: 'Creamy Mushroom Risotto', price: 220, image: 'Images/italian/creamy_mushroom_risotto.jpeg', rating: 4.8, description: 'Rich, creamy mushroom risotto, with earthy depth in every bite.' },
    'italian-7': { id: 'italian-7', name: 'Bruschetta Al Pomodoro', price: 200, image: 'Images/italian/bruschetta_al_pomodoro.jpeg', rating: 4.7, description: 'Crispy toasted bruschetta topped with juicy tomatoes and basil, a fresh start to any Italian meal.' },
    'italian-8': { id: 'italian-8', name: 'Lasagna', price: 220, image: 'Images/italian/lasagna.jpeg', rating: 4.3, description: 'Layered lasagna with rich meat sauce and creamy cheese, baked until bubbling and golden.' },

    // Deserts

    'dessert-1': { id: 'dessert-1', name: 'Gulab Jamun', price: 100, image: 'Images/Desert/gulab_jamun.jpeg', rating: 4.7, description: 'Soft, golden dumplings soaked in rose-scented sugar syrup, melting in the mouth with every bite.' },
    'dessert-2': { id: 'dessert-2', name: 'Carrot Halwa', price: 120, image: 'Images/Desert/carrot_halwa.jpeg', rating: 4.6, description: 'Warm, rich carrot halwa slow-cooked with ghee, milk, and nuts. a traditional delight in every spoonful.' },
    'dessert-3': { id: 'dessert-3', name: 'Jalebi Rabri', price: 150, image: 'Images/Desert/jalebi_rabri.jpeg', rating: 4.7, description: 'Hot, crispy jalebis paired with chilled, creamy rabri. a heavenly blend of crunch and sweetness.' },
    'dessert-4': { id: 'dessert-4', name: 'Kulfi', price: 120, image: 'Images/Desert/kulfi.jpeg', rating: 4.8, description: 'Dense and creamy traditional kulfi infused with cardamom and nuts, served chilled for a perfect finish.' },
    'dessert-5': { id: 'dessert-5', name: 'Payasam', price: 125, image: 'Images/Desert/payasam.jpeg', rating: 4.7, description: 'Sweet, creamy payasam simmered with milk, jaggery, and cardamom, garnished with ghee-roasted nuts.' },
    'dessert-6': { id: 'dessert-6', name: 'Rasamalai', price: 180, image: 'Images/Desert/rasamalai.jpeg', rating: 4.8, description: 'Soft, spongy cheese discs soaked in saffron-infused milk, delicately flavored with cardamom and nuts.' },
    'dessert-7': { id: 'dessert-7', name: 'Mishti Dol', price: 120, image: 'Images/Desert/mishti_doi.jpeg', rating: 4.7, description: 'Thick, creamy sweetened curd fermented to perfection — a Bengali classic with a caramelized twist.' },

    // Drinks

    'drink-1': { id: 'drink-1', name: 'Blue Lagoon', price: 140, image: 'Images/Drinks/blue_lagoon.jpeg', rating: 4.8, description: 'Chilled, vibrant blue lagoon mocktail with a citrusy twist, perfect for a refreshing burst of flavor.' },
    'drink-2': { id: 'drink-2', name: 'Sweet Lassi', price: 140, image: 'Images/Drinks/sweet_lassi.jpeg', rating: 4.6, description: 'Thick, creamy sweet lassi blended with yogurt and sugar, served chilled, traditional treat.' },
    'drink-3': { id: 'drink-3', name: 'Tender Coconut Water', price: 130, image: 'Images/Drinks/tender_coconut_water.jpeg', rating: 4.7, description: 'Cool, naturally sweet tender coconut water served fresh light, hydrating, and refreshing.' },
    'drink-4': { id: 'drink-4', name: 'Strawberry Milkshake', price: 180, image: 'Images/Drinks/strawberry_milkshake.jpeg', rating: 4.8, description: 'Thick strawberry milkshake blended with berries and cream, a sweet and fruity indulgence.' },
    'drink-5': { id: 'drink-5', name: 'Virgin Mojito', price: 150, image: 'Images/Drinks/virgin_mojito.jpeg', rating: 4.7, description: 'Refreshing virgin mojito with muddled mint, lime, and soda perfect for any time of day.' },
    'drink-6': { id: 'drink-6', name: 'Cold Coffee', price: 120, image: 'Images/Drinks/cold_coffee.jpeg', rating: 4.8, description: 'Chilled, frothy cold coffee blended with milk and ice — smooth, bold, and irresistibly energizing.' },
    'drink-7': { id: 'drink-7', name: 'Thandai', price: 125, image: 'Images/Drinks/thandai.jpeg', rating: 4.7, description: 'Chilled, spiced Thandai made with milk, nuts, and saffron — a festive blend of flavor and tradition.' },

};

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
});

// Add item to cart
function addToCart(itemId) {
    const item = foodData[itemId];
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    saveCart();
    updateCartDisplay();
}


// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartDisplay();

    if (typeof updateCartIconBadge === 'function') {
    updateCartIconBadge();
    }
}

// Update item quantity
function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartDisplay();
    }
}

// Clear entire cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();

    if (typeof updateCartIconBadge === 'function') {
    updateCartIconBadge();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('foodhub-cart', JSON.stringify(cart));
}

// Get cart totals
function getCartTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 299 ? 0 : 50;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + deliveryFee + tax;
    
    return { subtotal, deliveryFee, tax, total };
}

// Get total item count
function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart display
function updateCartDisplay() {
    const emptyCart = document.getElementById('empty-cart');
    const cartItems = document.getElementById('cart-items');
    const orderSummary = document.getElementById('order-summary');
    const cartCount = document.getElementById('cart-count');
    
    cartCount.textContent = getCartItemCount();
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartItems.style.display = 'none';
        orderSummary.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartItems.style.display = 'flex';
        orderSummary.style.display = 'block';
        
        renderCartItems();
        updateOrderSummary();
    }
}

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-content">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-rating">
                        <span class="star">★</span>
                        <span class="rating-text">${item.rating}</span>
                    </div>
                </div>

                <div class="item-actions">
                    <div class="item-price">
                        ₹${(item.price * item.quantity).toLocaleString()}
                    </div>
                    
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        
                        <span class="quantity">${item.quantity}</span>
                        
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                        
                        <button class="qty-btn remove-btn" onclick="removeFromCart('${item.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Update order summary
function updateOrderSummary() {
    const { subtotal, deliveryFee, tax, total } = getCartTotals();
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('tax').textContent = `₹${tax}`;
    document.getElementById('total').textContent = `₹${total.toLocaleString()}`;
    
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const freeDeliveryMsg = document.getElementById('free-delivery-msg');
    const remainingAmount = document.getElementById('remaining-amount');
    
    if (deliveryFee === 0) {
        deliveryFeeElement.textContent = 'FREE';
        deliveryFeeElement.classList.add('free-delivery');
        freeDeliveryMsg.style.display = 'none';
    } else {
        deliveryFeeElement.textContent = `₹${deliveryFee}`;
        deliveryFeeElement.classList.remove('free-delivery');
        freeDeliveryMsg.style.display = 'block';
        remainingAmount.textContent = `₹${(299 - subtotal).toLocaleString()}`;
    }
}

// Send cart to server with table number
function sendCartToServer() {
    const tableNumber = document.getElementById("table-number").value.trim();
    const bookingTime = document.getElementById("booking-time").value.trim();

    const bookingTimeFormatted = bookingTime.replace("T", " ") + ":00";
    const user = JSON.parse(localStorage.getItem('userInfo'));

    if (!user || !user.email || user.email.trim() === "") {
        alert("Please sign in with Google to book a table.");
        window.location.href = "signin.html";
        return;
    }

    if (!tableNumber || !bookingTime) {
        alert("Please enter both table number and booking date & time before proceeding.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before booking a table.");
        return;
    }

    // Calculate totals
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let bookingFee = 0; // if free, set 0
    let tax = subtotal * 0.05; // example 5% tax
    let totalCost = subtotal + bookingFee + tax;

    const dataToSend = {
        name: user.name,
        email: user.email,
        table_number: parseInt(tableNumber),
        booking_time: bookingTimeFormatted,
        items: cart.map(item => ({
            name: item.name,
            count: item.quantity
        })),
        subtotal: subtotal,
        booking_fee: bookingFee,
        tax: tax,
        total_cost: totalCost
    };

    fetch('store_cart.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            alert("Your table and food has been booked successfully!");
            clearCart();
            window.location.href = "FoodHub.html";
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(err => {
        console.error(err);
        alert("Failed to place the order.");
    });
}

// Export functions for use in other pages
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.getCartItemCount = getCartItemCount;
window.sendCartToServer = sendCartToServer;
