document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "You only live once, but if you do it right, once is enough. – Mae West"
    ];

    const quoteButton = document.getElementById('get-quote');
    const quoteDisplay = document.getElementById('quote-display');
    const popupButton = document.getElementById("popupButton");
    const imagePopup = document.getElementById("imagePopup");
    const closeButton = document.getElementById("closeButton");

    if (quoteButton && quoteDisplay) {
        quoteButton.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteDisplay.textContent = quotes[randomIndex];
        });
    }

    if (popupButton && imagePopup) {
        popupButton.addEventListener('click', function() {
            imagePopup.style.display = "block";
        });
    }

    if (closeButton && imagePopup) {
        closeButton.addEventListener('click', function() {
            imagePopup.style.display = "none";
        });
    }
});
