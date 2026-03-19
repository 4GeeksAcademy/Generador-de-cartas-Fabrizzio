import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  const suits = ["heart", "diamond", "spade", "club"];
  const symbols = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣"
  };

  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Elegir aleatorios
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  // HTML
  let card = document.getElementById("card");
  let top = document.getElementById("top");
  let bottom = document.getElementById("bottom");
  let number = document.getElementById("number");

  // contenido
  top.innerHTML = symbols[randomSuit];
  bottom.innerHTML = symbols[randomSuit];
  number.innerHTML = randomValue;

  // clase de color
  card.classList.add(randomSuit);
};
