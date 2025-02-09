document.addEventListener("DOMContentLoaded", function () {
    let coins = 200;
    let tokens = 0;
    let spinValues = [150, 300, 500, 700, 1000, 5, 10, 15];

    document.getElementById("coin-balance").textContent = coins;
    document.getElementById("token-balance").textContent = tokens;
});

function convertCurrency() {
    let coins = parseInt(document.getElementById("coin-balance").textContent);
    if (coins >= 100) {
        let tokens = Math.floor(coins / 100);
        document.getElementById("token-balance").textContent = tokens;
        document.getElementById("coin-balance").textContent = 0;
        alert("Converted to " + tokens + " MetaVerse Tokens!");
    } else {
        alert("Not enough coins to convert.");
    }
}

function spinWheel() {
    let spinValues = [150, 300, 500, 700, 1000, 5, 10, 15];
    let reward = spinValues[Math.floor(Math.random() * spinValues.length)];

    let coins = parseInt(document.getElementById("coin-balance").textContent);
    document.getElementById("coin-balance").textContent = coins + reward;

    alert("You won " + reward + " coins!");
}

function navigate(section) {
    alert("Navigating to " + section);
}
