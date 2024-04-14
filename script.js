// follow Me Subscrobe function //

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

// end of follow me subscribe function //


//  pop-up message when the contact form has been completed

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    var submitBtn = document.getElementById('submitBtn');
    var messageSent = document.getElementById('messageSent');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        
        // Here you would send the form data to your backend for processing
        
        // For demonstration purposes, let's assume the form was successfully submitted
        // Display a popup message
        messageSent.style.display = 'block'; // Show the message
        setTimeout(function () {
            messageSent.style.display = 'none'; // Hide the message after 3 seconds
        }, 3000);

        // Clear the form fields
        contactForm.reset();
    });
});