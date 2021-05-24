// Example 1
if (1 !== 1) {
  console.log("It's true!");
}

// Example 2
let rating = 0;

if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR");
} 
else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
} 
else if (rating === 1) {
  console.log("NEEDS IMPROVEMENT");
} 
else {
  console.log("INVALID RATING");
}

// Example 3
let num = 38;

if (num % 2 !== 0) {
  console.log("ODD NUMBER");
}

// Example 4

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} 
else {
  console.log(
    `Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`
  );
}


