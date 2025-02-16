document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById('calculate');
    if (button) {
        button.addEventListener('click', calculateLove);
    }
});

function calculateLove() {
    let yourNameInput = document.getElementById('your-name');
    let crushNameInput = document.getElementById('crush-name');

    // Check if inputs exist (to prevent errors)
    if (!yourNameInput || !crushNameInput) {
        console.error("Input elements not found!");
        return;
    }

    let yourName = yourNameInput.value.trim();
    let crushName = crushNameInput.value.trim();

    if (yourName !== "" && crushName !== "") {
        let percentage = Math.floor(Math.random() * 100) + 1;

        let resultMessage = document.getElementById("result-message");
        let resultPercentage = document.getElementById("result-percentage");

        if (resultMessage) {
            resultMessage.innerText = `${yourName} and ${crushName} are ${percentage}% compatible!`;
        }

        if (resultPercentage) {
            resultPercentage.innerText = `${percentage}%`;
        }
    } else {
        alert("Please enter both names!");
    }
}
