// JavaScript for form submission and validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required. Please fill out the form.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("You submitted successfully!");
        this.reset(); // Reset the form after successful submission
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}