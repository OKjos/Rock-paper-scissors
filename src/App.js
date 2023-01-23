import './App.css';
import React, { useState } from 'react';


function App(){

  const [result, setResult] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");

  function handleClick(choice) {
    setRandomNumber(Math.floor(Math.random() * 3));
    setPlayerChoice(choice);
    compareChoice();
  }

  function compareChoice() {
    if (randomNumber === 0 && playerChoice === "rock") {
      setResult(alert("Draw"));
    } else if (randomNumber === 0 && playerChoice === "paper") {
      setResult(alert("You Win"));
    } else if (randomNumber === 0 && playerChoice === "scissors") {
      setResult(alert("You Lose"));
    } else if (randomNumber === 1 && playerChoice === "rock") {
      setResult(alert("You Lose"));
    } else if (randomNumber === 1 && playerChoice === "paper") {
      setResult(alert("Draw"));
    } else if (randomNumber === 1 && playerChoice === "scissors") {
      setResult(alert("You Win"));
    } else if (randomNumber === 2 && playerChoice === "rock") {
      setResult(alert("You Win"));
    } else if (randomNumber === 2 && playerChoice === "paper") {
      setResult(alert("You Lose"));
    } else if (randomNumber === 2 && playerChoice === "scissors") {
      setResult(alert("Draw"));
  }
}

  return  <>
          <h1>Rock Paper Scissors</h1>
           <section className="grid-container">
              <button class="grid-item" className="button" onClick={() => handleClick("paper")}>Paper</button>
              <div className="paper-picture"> 
               </div>
               <button className="button" onClick={() => handleClick("scissors")}>Scissors</button>
               <div className="scissors-picture">
               </div>
               <button className="button" onClick={() => handleClick("rock")}>Rock</button>
               <div className="rock-picture">
                <p>{result}</p>
               </div>
            </section>
         </>
};

export default App;