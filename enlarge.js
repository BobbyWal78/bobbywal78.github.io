function enlargeImage(image) {
    // Create a modal container
    var modal = document.createElement('div');
    modal.className = 'modal';
    
    // Create the enlarged image element
    var enlargedImg = document.createElement('img');
    enlargedImg.src = image.src;
    enlargedImg.className = 'enlarged-img';
    
    // Append the enlarged image to the modal container
    modal.appendChild(enlargedImg);
    
    // Append the modal container to the body
    document.body.appendChild(modal);
    
    // Close the modal when clicked outside the image
    modal.addEventListener('click', function() {
        modal.remove();
    });
}