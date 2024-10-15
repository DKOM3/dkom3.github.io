const quotes = [
    "The best way to predict the future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, we only regret the chances we didn’t take."
];

document.getElementById("quote-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").textContent = quotes[randomIndex];
});
