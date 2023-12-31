const countdownContainer = document.querySelector(".countdown-container");
    const countdownElement = document.getElementById("countdown");
    const startButton = document.getElementById("startButton");

    // Function to calculate the next New Year's Eve
    function getNextNewYear() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const nextNewYear = new Date(`Jan 1, ${currentYear + 1} 00:00:00`);
        return nextNewYear.getTime();
    }

    // Function to start the countdown and trigger fireworks
    function startCountdown() {
        const countDownDate = getNextNewYear();

        // Update the countdown every 1 second
        const x = setInterval(function () {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the countdown is over, display a message and trigger fireworks
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "Happy New Year!";
                startButton.style.display = "none"; // Hide the button when the countdown is complete
                triggerFireworks(); // Function to trigger fireworks
            }
        }, 1000);

        // Hide the button once the countdown starts
        startButton.style.display = "none";
    }

    // Show the button initially
    startButton.style.display = "block";

    // Function to trigger fireworks (You may need to adjust the parameters based on the fireworks.js documentation)
    function triggerFireworks() {
        fireworks.start();
    }
