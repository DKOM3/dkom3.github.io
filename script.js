const quotes = [
    "The best way to predict the future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, we only regret the chances we didn’t take.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Life is either a daring adventure or nothing at all."
    
];

document.getElementById("quote-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").textContent = quotes[randomIndex];
});
