const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

document.getElementById('get-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = quotes[randomIndex];
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
