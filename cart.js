let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get the cart items container and buttons
const cartItemsContainer = document.getElementById('cartItems');
const totalPriceContainer = document.getElementById('totalPrice');
const clearCartButton = document.getElementById('clearCart');

// Function to render the cart
function renderCart() {
    // Clear the cart display first
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceContainer.innerHTML = "Total Price: Rs. 0";
    } else {
        let totalPrice = 0;

        // Loop through the cart and display the items with quantities and total price
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';

            // Calculate total price for this item (price * quantity)
            const totalPriceForItem = item.price * item.quantity;
            totalPrice += totalPriceForItem;

            listItem.innerHTML = `
                <strong>${item.name}</strong><br>
                Price: Rs.${item.price}<br>
                Quantity: ${item.quantity}<br>
                Total Price: Rs.${totalPriceForItem}<br>
                <button onclick="removeItem(${index})">Remove</button>
                <hr>
            `;

            // Append the item to the cart items container
            cartItemsContainer.appendChild(listItem);
        });

        // Display the total price (previously grand total)
        totalPriceContainer.innerHTML =` Total Price: Rs. ${totalPrice}`;
    }}

// Render the cart when the page loads
renderCart();

// Function to clear the cart
clearCartButton.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your cart?")) {
        // Clear the cart from localStorage
        localStorage.removeItem('cart');
        
        // Update the cart display
        cart = [];
        renderCart(); // Re-render the cart
    }
});

// Function to remove an item from the cart
function removeItem(index) {
    // Remove the item from the cart array
    cart.splice(index, 1);
    
    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the cart display without reloading the page
    renderCart();
}