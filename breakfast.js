
function addToCart(item, price) {
    const userResponse = confirm(`Are you sure you want to order ${item} `);
    // for Rs.${price}?
    
    if (userResponse) {
        alert(`${item} has been added to your cart.`);

        // Retrieve existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if item already exists in the cart
        const existingItem = cart.find(cartItem => cartItem.name === item);

        if (existingItem) {
            // Increase the quantity of the existing item
            existingItem.quantity += 1;
        } else {
            // Add new item with quantity 1
            const itemDetails = {
                name: item,
                price: price,
                quantity: 1
            };
            cart.push(itemDetails);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Open the cart page
        window.location.href = './cart.html';
    } else {
        alert(`${item} order has been canceled.`);
    }
}