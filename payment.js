// Get the confirm payment button
const confirmPaymentButton = document.getElementById('confirmPayment');

// Add a click event listener
confirmPaymentButton.addEventListener('click', () => {
    alert('Thank you for your order!');
    // Redirect to a thank you or homepage
    window.location.href = 'thankyou.html';
});