//function plays the Craps game
function playCraps() {
        // generate two random numbers between 1 and 6 for the dice rolls
    let die1 = Math.floor(Math.random() * 6) + 1; // First roll
    let die2 = Math.floor(Math.random() * 6) + 1; // Second roll

        // Calculate the sum of the two dice
    const sum = die1 + die2;

         // result message
    let message = `You rolled: ${die1} and ${die2}<br>Total sum: ${sum}<br>`;

        // outcome based on the sum and dice values
        // losing
    if (sum === 7 || sum === 11) {
        message += "CRAPS, You lose!"; // Player loses
        //winning
    } else if (die1 === die2 && die1 % 2 === 0) {
        message += "You win!"; // Player wins with doubles that are even
        //tie/push
    } else {
        message += "You pushed!"; // Neither win nor lose
    }

    // output the result to the webpage
    document.getElementById("result").innerHTML = message; // Display the message


}

  