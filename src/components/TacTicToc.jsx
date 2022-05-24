import React, { useState } from "react";

const TacTicToc = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const checkWinner = (square) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      Diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          square[pattern[0]] === "" ||
          square[pattern[1]] === "" ||
          square[pattern[2]] === ""
        ) {
        }

       else if (
          square[pattern[0]] === square[pattern[1]] &&
          square[pattern[1]] === square[pattern[2]]
        ) {
          setWinner(square[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }
    let square = [...cells];

    if (turn === "x") {
      square[num] = "x";
      setTurn("o");
    } else {
      square[num] = "o";
      setTurn("x");
    }
    checkWinner(square);
    setCells(square);
   
  };
  const handleRestart=()=>{
    setWinner(null);
    setCells(Array(9).fill(""))

  }
  let Ceil = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  return (
    <div className="container">
      <table>
        Turn :{turn}
        <tbody>
          <tr>
            <Ceil num={0} />
            <Ceil num={1} />
            <Ceil num={2} />
          </tr>
          <tr>
            <Ceil num={3} />
            <Ceil num={4} />
            <Ceil num={5} />
          </tr>
          <tr>
            <Ceil num={6} />
            <Ceil num={7} />
            <Ceil num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner!</p>
          <button onClick=
          {()=> handleRestart()}>Play Again</button>
        </>
      )}
      
    </div>
  );
};

export default TacTicToc;
