// ********  SUBSCRIBRE BUTTON FUNCTION, ALL PAGES   ****/

    function subscribe() {
         // Get the email address entered by the user
    var email = document.getElementById('email').value;
   
        // If Email Address is not empty
    if (email.trim() !== '') {
        // Display a popup message
    alert('Thank You For Subscribing!');
     
    } else {
        // If email is empty, prompt the user to enter an email address
    alert('Please enter your email address.');
    }
}
// ********  END SUBSCRIBRE BUTTON FUNCTION    ****/


//*********** CONTACT FORM SUBMISSION, CONTACE PAGE ***********/

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    var submitBtn = document.getElementById('submitBtn');
    var messageSent = document.getElementById('messageSent');

    submitBtn.addEventListener('click', function (event) {
  //      event.preventDefault(); // Prevent form submission
        
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
        
                
        // Display the popup message
        messageSent.style.display = 'block'; 
        // Hide the message after 3 seconds
        setTimeout(function () {
            messageSent.style.display = 'none'; 
        }, 3000);
        // Clear the form fields after send message button clicked
        contactForm.reset();
    });
});

//*********** END OF CONTACT FORM SUBMISSION ***********/
