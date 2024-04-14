// script.js

function subscribe() {
    // Get the email address entered by the user
    var email = document.getElementById('email').value;

    // Check if the email is not empty
    if (email.trim() !== '') {
        // Display a popup message
        alert('Thank You For Subscribing!');
    } else {
        // If email is empty, prompt the user to enter an email address
        alert('Please enter your email address.');
    }
}

// Add an event listener to the button
document.getElementById("submitBtn").addEventListener("click", function() {
    // Display the message
    document.getElementById("messageSent").style.display = "block";
});




