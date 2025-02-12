// Set the date we're counting down to (March 21, 2025)
const countDownDate = new Date("March 21, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

const images = [
    ["images/celeb1.png", "images/celeb3.png", "images/celeb5.png"], // Carousel 1 images
    ["images/celeb2.png", "images/celeb4.png", "images/celeb6.png"]  // Carousel 2 images
];

let index = [0, 0]; // Track current image for both carousels

function nextSlide(carouselIndex) {
    index[carouselIndex] = (index[carouselIndex] + 1) % images[carouselIndex].length;
    updateImage(carouselIndex);
}

function prevSlide(carouselIndex) {
    index[carouselIndex] = (index[carouselIndex] - 1 + images[carouselIndex].length) % images[carouselIndex].length;
    updateImage(carouselIndex);
}

function updateImage(carouselIndex) {
    document.querySelectorAll(".event-image")[carouselIndex].src = images[carouselIndex][index[carouselIndex]];
}


