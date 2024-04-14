/*const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox 
var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); **/


function subscribe() {
    // Get the email address entered by the user
    var email = document.getElementById('email').value;

    // Check if the email is not empty
    if (email.trim() !== '') {
        // Display a popup message
        alert('Email sent!');
    } else {
        // If email is empty, prompt the user to enter an email address
        alert('Please enter your email address.');
    }
}
