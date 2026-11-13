
// Get the form from HTML
const contactForm = document.getElementById("contact-form");

// Get the status message element
const formStatus = document.getElementById("form-status");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's input
    const name = document.getElementById("name").value;

    // Display a success message
    formStatus.textContent = "Thanks, " + name + "! Your message was received.";

    // Clear the form
    contactForm.reset();

});
