const ball = document.getElementById("ball");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score");

let basketX = 160;
let ballX = Math.random() * 370;
let ballY = 0;
let score = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && basketX > 0) {
        basketX -= 20;
    } else if (event.key === "ArrowRight" && basketX < 320) {
        basketX += 20;
    }
    basket.style.left = basketX + "px";
});

function dropBall() {
    ballY += 5;
    ball.style.top = ballY + "px";
    ball.style.left = ballX + "px";

    if (ballY >= 470) {
        if (ballX >= basketX && ballX <= basketX + 80) {
            score++;
            scoreDisplay.textContent = score;
        }
        ballY = 0;
        ballX = Math.random() * 370;
    }

    requestAnimationFrame(dropBall);
}

dropBall();
