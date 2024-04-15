const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            // Create expanded view container
            const expandedView = document.createElement('div');
            expandedView.classList.add('expanded');

            // Create image element in the expanded view
            const expandedImg = document.createElement('img');
            expandedImg.src = img.src;
            expandedView.appendChild(expandedImg);

            // Add click event to remove expanded view when clicked outside the image
            expandedView.addEventListener('click', () => {
                expandedView.remove();
            });

            // Append the expanded view to the body
            document.body.appendChild(expandedView);
        });
    });