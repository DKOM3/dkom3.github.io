const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "You only live once, but if you do it right, once is enough. – Mae West"
];

document.getElementById('get-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = quotes[randomIndex];
});
document.getElementById("popupButton").onclick = function() {
    document.getElementById("imagePopup").style.display = "block";
};

document.getElementById("closeButton").onclick = function() {
    document.getElementById("imagePopup").style.display = "none";
};
