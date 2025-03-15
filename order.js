 // Function to handle the order action
function addToCart(itemName) {
    alert("You have  selected : " + itemName);
}

// Attach event listeners to all "Order Now" buttons on document load
document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the text "Order Now"
    const orderButtons = document.querySelectorAll('button');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemTitle = this.previousElementSibling.innerText; // Get the item title
            orderNow(itemTitle);
        });
    });
});

