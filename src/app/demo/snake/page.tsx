import React from 'react'

export default function page() {
  // voor bord grote en maten
var blokgrote = 25;
var posY = 20;
var posX = 20;
var bord;
var context;

// voor snek zijn positie
var snakeEenX = blokgrote * 5;
var snakeEenY = blokgrote * 5;

var velocityEenx = 0;
var velocityEeny = 0;

var snakebodyEen = [];

var score = 0;

// voor eten zijn positie
var foodx = blokgrote * 10;
var foody = blokgrote * 10;

var gameover = false;

// zorgt ervoor dat er een speelveld in het midden van je scherm komt
window.onload = function (){
    bord = document.getElementById("bord");
    bord.height = posY * blokgrote;
    bord.width = posX * blokgrote;
    context = bord.getContext("2d");

    placefood();
    document.addEventListener("keyup", changedirectionSnakeEen, changedirectionSnakeTwee);
    document.addEventListener("keyup", changedirectionSnakeTwee);
    setInterval(update, 1500/10);
}
// zorgt ervoor dat het speelveld update
function update(){
    if (gameover) {
        return;
    }

    context.fillStyle = "black";
    context.fillRect( 0, 0, bord.width, bord.height);

    context.fillStyle = "red";
    context.fillRect(foodx, foody, blokgrote, blokgrote);

    if (snakeEenX == foodx && snakeEenY == foody){
        snakebodyEen.push([foodx, foody]);
        scoreboard(1);
        placefood();
    }


    for (let i = snakebodyEen.length-1; i > 0; i--){
        snakebodyEen[i] = snakebodyEen[i-1];
    }

    if (snakebodyEen.length){
        snakebodyEen[0] = [snakeEenX, snakeEenY];
    }

    context.fillStyle = "green";
    snakeEenX += velocityEenx * blokgrote;
    snakeEenY += velocityEeny * blokgrote;
    context.fillRect(snakeEenX, snakeEenY, blokgrote, blokgrote)
    for (let i = 0; i < snakebodyEen.length; i++ ){
        context.fillRect(snakebodyEen[i][0], snakebodyEen[i][1], blokgrote, blokgrote);
    }

    if (snakeEenX < 0 || snakeEenX > posX*blokgrote || snakeEenY < 0 || snakeEenY > posY*blokgrote){
        gameover = true
        alert("Snekkie 1 L bozo")
        document.getElementById("restartknop").style.display = "inline";
    }

    for (let i = 0; i < snakebodyEen.length; i++){
        if(snakeEenX == snakebodyEen[i][0] && snakeEenY == snakebodyEen[i][1]){
            gameover = true;
            alert("Snekkie 1 L bozo")
            document.getElementById("restartknop").style.display = "inline";
        }
    }
}

function changedirectionSnakeEen(e){
    if (e.code == "KeyW" && velocityEeny != 1){
        velocityEenx = 0;
        velocityEeny = -1;
    }   
    else if (e.code == "KeyS" && velocityEeny != -1){
        velocityEenx = 0;
        velocityEeny = 1;
    } 
    else if (e.code == "KeyA" && velocityEenx != 1){
        velocityEenx = -1;
        velocityEeny = 0;
    } 
    else if (e.code == "KeyD" && velocityEenx != -1){
        velocityEenx = 1;
        velocityEeny = 0;
    } 
}

function changedirectionSnakeTwee(e){
}

// randomizer waar het eten komt
function placefood(){
    foodx = Math.floor(Math.random()* posX)* blokgrote;
    foody = Math.floor(Math.random()* posY)* blokgrote;
}
// een nieuwe snake plaatsen
function playagain(){
    gameover = false;
    {
    context.fillStyle = "green";
    snakeEenX = 5 * blokgrote;
    snakeEenY = 5 * blokgrote;
    }
    velocityEenx = 0;
    velocityEeny = 0;
    snakebodyEen = [];
    context.fillRect(snakeEenX, snakeEenY, blokgrote, blokgrote);
    document.getElementById("restartknop").style.display = "none";
    score = 0;
    document.getElementById("score").innerHTML = score;
}
function scoreboard(punt)
{
    score = score + punt;
    document.getElementById("score").innerHTML = score;
    if (score == 30)
    {
        alert("Goed gedaan ig")
        window.location.href = "/School/praktijk/T2/nieuw%20portfolio%20L/index2.html";
    }
}

  return (
    <>
      <br/>
            <h1>
                Snekk.io
            </h1>
            <h2>
                Score: <span id="score"></span>/30
            </h2>
        <canvas id="bord"></canvas>
          <button onClick={playagain} id="restartknop">
              Play again
          </button>
    </>
  )
}
