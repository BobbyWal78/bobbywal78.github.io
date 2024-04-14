// script.js

function subscribe() {
    // Get the email address entered by the user
    var email = document.getElementById('email').value;
    var email = emailInput.value;
    
        // Check if the email is not empty
    if (email.trim() !== '') {
        // Display a popup message
        alert('Thank You For Subscribing!');
      // Clear the email input field
      emailInput.value = '';  
    } else {
        // If email is empty, prompt the user to enter an email address
        alert('Please enter your email address.');
    }
}

				// Add an event listener to the button
                document.getElementById("submitBtn").addEventListener("click", function() {
                    // Display the message
                    document.getElementById("messageSent").style.display = "block";



document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display message sent
    document.getElementById("messageSent").style.display = "block";
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
});
