// follow Me Subscrbe button //

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
        
                
        // Display the popup message
        messageSent.style.display = 'block'; // Show the message
        setTimeout(function () {
            messageSent.style.display = 'none'; // Hide the message after 3 seconds
        }, 3000);

        // Clear the form fields
        contactForm.reset();
    });
});

// end of pop up message contact form.html


// expand view container in services html
const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            // Create the expanded view container
            const expandedView = document.createElement('div');
            expandedView.classList.add('expanded');

            // Create the image element in the expanded view
            const expandedImg = document.createElement('img');
            expandedImg.src = img.src;
            expandedView.appendChild(expandedImg);

            // Add a click event to remove expanded view when clicked outside the image
            expandedView.addEventListener('click', () => {
                expandedView.remove();
            });

            // Append the expanded view to the body
            document.body.appendChild(expandedView);
        });
    });

// END expand view container in services



