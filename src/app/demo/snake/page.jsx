"use client";
import React, { useEffect, useRef, useState } from "react";
import "./demo.css";

// snake game
const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const blokgrote = 25;
  const posY = 20;
  const posX = 20;

  let snakeEenX = blokgrote * 5;
  let snakeEenY = blokgrote * 5;
  let velocityEenx = 0;
  let velocityEeny = 0;
  let snakebodyEen = [];
  let foodx = blokgrote * 10;
  let foody = blokgrote * 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      canvas.height = posY * blokgrote;
      canvas.width = posX * blokgrote;

      placeFood();
      document.addEventListener("keyup", changedirectionSnakeEen);

      const interval = setInterval(update, 1500 / 10);
      return () => {
        clearInterval(interval);
        document.removeEventListener("keyup", changedirectionSnakeEen);
      };
    }
  }, []);

  // update de game
  const update = () => {
    if (gameOver) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "red";
      context.fillRect(foodx, foody, blokgrote, blokgrote);

      if (snakeEenX === foodx && snakeEenY === foody) {
        snakebodyEen.push([foodx, foody]);
        setScore((prevScore) => prevScore + 1);
        placeFood();
      }

      for (let i = snakebodyEen.length - 1; i > 0; i--) {
        snakebodyEen[i] = snakebodyEen[i - 1];
      }

      if (snakebodyEen.length) {
        snakebodyEen[0] = [snakeEenX, snakeEenY];
      }

      context.fillStyle = "green";
      snakeEenX += velocityEenx * blokgrote;
      snakeEenY += velocityEeny * blokgrote;
      context.fillRect(snakeEenX, snakeEenY, blokgrote, blokgrote);
      for (let i = 0; i < snakebodyEen.length; i++) {
        context.fillRect(
          snakebodyEen[i][0],
          snakebodyEen[i][1],
          blokgrote,
          blokgrote
        );
      }

      if (
        snakeEenX < 0 ||
        snakeEenX > posX * blokgrote ||
        snakeEenY < 0 ||
        snakeEenY > posY * blokgrote
      ) {
        setGameOver(true);
        alert("Snekkie 1 L bozo");
        playAgain();
      }
    }
  };

  // verander de richting van de snake
  const changedirectionSnakeEen = (e) => {
    if (e.code === "KeyW" && velocityEeny !== 1) {
      velocityEenx = 0;
      velocityEeny = -1;
    } else if (e.code === "KeyS" && velocityEeny !== -1) {
      velocityEenx = 0;
      velocityEeny = 1;
    } else if (e.code === "KeyA" && velocityEenx !== 1) {
      velocityEenx = -1;
      velocityEeny = 0;
    } else if (e.code === "KeyD" && velocityEenx !== -1) {
      velocityEenx = 1;
      velocityEeny = 0;
    }
  };

  // gen het eten
  const placeFood = () => {
    foodx = Math.floor(Math.random() * posX) * blokgrote;
    foody = Math.floor(Math.random() * posY) * blokgrote;
  };

  // speel opnieuw en reset de values
  const playAgain = () => {
    setGameOver(false);
    snakeEenX = 5 * blokgrote;
    snakeEenY = 5 * blokgrote;
    velocityEenx = 0;
    velocityEeny = 0;
    snakebodyEen = [];
    setScore(0);
  };

  return (
    <>
      <br />
      <h1 style={{ textAlign: "center", margin: "4rem 0px 3rem 0px" }}>
        S<span style={{ borderBottom: "6px solid #ef5868" }}>nekk&nbsp;</span>
      </h1>
      <h2 style={{ textAlign: "center", margin: "4rem 0px 3rem 0px" }}>
        Score: <span>{score}</span>/30
      </h2>
      <div className="text-center">
        <canvas ref={canvasRef} id="bord"></canvas>
      </div>
    </>
  );
};

export default SnakeGame;
