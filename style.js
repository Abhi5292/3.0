document.addEventListener("DOMContentLoaded", function () {
    // Hide splash screen after animation
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("game-container").style.display = "block";
    }, 3000);

    // Spin Wheel Animation
    document.getElementById("spin-btn").addEventListener("click", function () {
        alert("Spinning the wheel!");
    });

    // Claim Daily Bonus
    document.getElementById("claim-bonus").addEventListener("click", function () {
        alert("You claimed your daily bonus!");
    });
});
