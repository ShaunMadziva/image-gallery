let images = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    alt: "Bright blue chameleon looking into the camera, close up.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s",
    alt: "Blue bird perched on a branch with white flowers.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    alt: "Bright blue chameleon looking into the camera, close up.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s",
    alt: "Blue bird perched on a branch with white flowers.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
    alt: "Bright blue chameleon looking into the camera, close up.",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s",
    alt: "Blue bird perched on a branch with white flowers.",
  },
];

// Select the main image and the thumbnail container
const mainImage = document.getElementById('mainImage');
const thumbnailContainer = document.getElementById('thumbnailContainer');

// set the first image as the main image
if (images.length > 0) {
    mainImage.src = images[0].url;
    mainImage.alt = images[0].alt;
}

// Dynamically add thumbnails to the gallery
images.forEach((image) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.url;
    thumbnail.alt = image.alt;
    thumbnail.classList.add('thumbnail'); //adds a class to each thumbnail

    // Add click event to each thumbnail
    thumbnail.addEventListener('click', function() {
        mainImage.src = image.url;
        mainImage.alt = image.alt;
        //console.log(mainImage.alt)
    });

    // Add keyboard accessibility for thumbnails
    thumbnail.tabIndex = 0; // Make it focusable using tab key
    thumbnail.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { //press enter to 'click' on image
            mainImage.src = image.url;
            mainImage.alt = image.alt;
            //console.log(mainImage.alt)
        }
    });

    // Append the thumbnail to the container
    thumbnailContainer.appendChild(thumbnail);
});