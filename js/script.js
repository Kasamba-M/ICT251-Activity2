// Contact form validation and preview
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop the form from reloading the page

    // Get the values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name cannot be empty.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email cannot be empty.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        isValid = false;
    }

    // If everything is valid, show the preview
    if (isValid) {
        const preview = document.getElementById("formPreview");
        const previewContent = document.getElementById("previewContent");

        previewContent.textContent = 
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Topic: " + (topic || "Not provided") + "\n" +
            "Message: " + message + "\n\n" +
            "The data has been validated successfully. No message was sent.";

        preview.style.display = "block";
    }
});
// Theme Switch (Light / Dark mode)
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
});
// Expandable Project Details
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const details = button.nextElementSibling;

        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            button.textContent = "Show Details";
        }
    });
});