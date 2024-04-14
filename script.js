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

// end of pop up message contact form



// Function to handle image enlargement
function enlargeImage(imageElement) {
    const imageUrl = imageElement.src;

    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';

    // Create image element
    const popupImage = document.createElement('img');
    popupImage.classList.add('popup-image');
    popupImage.src = imageUrl;

    // Append elements to popup content
    popupContent.appendChild(closeButton);
    popupContent.appendChild(popupImage);

    // Append popup content to popup container
    popupContainer.appendChild(popupContent);

    // Append popup container to body
    document.body.appendChild(popupContainer);

    // Close popup when clicking on close button
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popupContainer);
    });

    // Close popup when clicking outside of the image
    window.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            document.body.removeChild(popupContainer);
        }
    });
}
