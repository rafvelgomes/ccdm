document.addEventListener("DOMContentLoaded", function () {

 // Array of image URLs
 var imageUrls = [
    'verde.png',
    'rosa.png',
    'azul.png',
    'amarelo.png',
];

// Function to get a random index from the array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Get a random image URL
var randomImageUrl = imageUrls[getRandomIndex(imageUrls)];

// Set the random image URL as the source for the image element
document.getElementById('linha').src = randomImageUrl;

var linhaImage = document.getElementById("linha");
///////////////////////////////////////////////////////////////////////////////

var header = document.querySelector("header");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            header.classList.remove("scrolled");
        } else {
            // Scrolling up
            header.classList.add("scrolled");
        }

        lastScrollTop = currentScroll;
    });
    });
    

