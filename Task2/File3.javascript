// Cart storage
const cart = [];

// Function to add items to the cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        const li = document.createElement('li');
        li.textContent = `${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    
    alert(`Thank you for your order! Your total is $${calculateTotalPrice().toFixed(2)}`);
    // Here you would typically send the order data to a server
    cart.length = 0; // Clear the cart
    updateCartDisplay(); // Update the display
}

// Helper function to calculate total price
function calculateTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
