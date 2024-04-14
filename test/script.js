function enlargeImage(image) {
    var enlargedImageContainer = document.getElementById("enlarged-image-container");
    var enlargedImage = document.getElementById("enlarged-image");
    var overlay = document.getElementById("overlay");

    enlargedImage.src = image.src;
    enlargedImageContainer.style.display = "block";
    overlay.style.display = "block";
}

function hideImage() {
    var enlargedImageContainer = document.getElementById("enlarged-image-container");
    var overlay = document.getElementById("overlay");

    enlargedImageContainer.style.display = "none";
    overlay.style.display = "none";
}



var flkty = new Flickity('.carousel', {
    // Flickity options here
  });