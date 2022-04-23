
// make variables for (paddles)
// make variables for ball  
// make variables for scores

var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight /2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 0;
var topPositionOfBall = 510;
var score1 = 0;
var score2 = 0;

// 2 players

function starBall() {
    topPositionOfBall = 510;
    leftPositionOfBall = 820;

    if(Math.random() < 0.5) {
        var side = 1;
    } else {
        var side = -1;
    }
    topSpeedOfBall = Math.random() * -6 - 5;
    leftSpeedOfBall = side * (Math.random() * 6 + 5);
}

// from stack overflow: https://stackoverflow.com/questions/62600489/scroll-event-on-keydown-like-down-arrow-and-up-arrow
// Had trouble making the paddles move up and down.
document.addEventListener('keydown', function(e){
    // "W" key player1
    if(e.key == 'w' || e.keycode == 87) {
        speedOfPaddle1 = -10;
    }
    // "S" key player1
    if(e.key == 's' || e.keycode == 83) {
        speedOfPaddle1 = 10;
    }
    // "Up arrow" key player2
    if(e.key == 'ArrowUp' || e.keycode == 38) {
        speedOfPaddle2 = -10;
    }
    // "Down arrow" key player2
    if(e.key == 'ArrowDown' || e.keycode == 40) {
        speedOfPaddle2 = 10;
    }
})

document.addEventListener('keyup', function(e){
    // "W" key player1
    if(e.key == 'w' || e.keycode== 87) {
        speedOfPaddle1 = 0;
    }
    // "S" key player1
    if(e.key == 's' || e.keycode == 83) {
        speedOfPaddle1 = 0;
    }
    // "Up arrow" key player2
    if(e.key == 'ArrowUp' || e.keycode == 38) {
        speedOfPaddle2 = 0;
    }
    // "Down arrow" key player2
    if(e.key == 'ArrowDown' || e.keycode == 40) {
        speedOfPaddle2 = 0;
    }
})

// from mdn web docs: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// this repeatedly calls a function or excutes code using the window interface. 

window.setInterval(function show() {
   
    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;

    topPositionOfBall += topSpeedOfBall;
    leftSpeedOfBall += leftSpeedOfBall;

// Stop paddles from leaving top of window
    if(positionOfPaddle1 <= 1) {
        positionOfPaddle1 = 1;
    }

    if(positionOfPaddle2 <= 1) {
        positionOfPaddle2 = 1;
    }

    // Stop paddles from leaving bottom of Window
    if(positionOfPaddle1 >= window.innerHeight - paddleHeight) {
        positionOfPaddle1 = window.innerHeight - paddleHeight
    }
    
    if(positionOfPaddle2 >= window.innerHeight - paddleHeight) {
        positionOfPaddle2 = window.innerHeight - paddleHeight
    }

    // Make ball move
    if(topPositionOfBall <= 150 || topPositionOfBall >= window.innerHeight - ballRadius) {
        topSpeedOfBall = - topSpeedOfBall
    }
    
    if(leftPositionOfBall <= paddleWidth) {
        if(topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight){
            leftSpeedOfBall = -leftSpeedOfBall;   
        } else {
            starBall();
        }
    }

    if(leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth){
        if(topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
            leftSpeedOfBall = -leftSpeedOfBall; 
        } else {
            starBall();
        }
    }

    document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
    document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

    document.getElementById('ball').style.top = (topPositionOfBall) + 'px';
    document.getElementById('ball').style.left = (leftPositionOfBall) + 'px';




}, 1000/60)