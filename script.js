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



document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display message sent pop-up box
    alert("Message Sent!");

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
});