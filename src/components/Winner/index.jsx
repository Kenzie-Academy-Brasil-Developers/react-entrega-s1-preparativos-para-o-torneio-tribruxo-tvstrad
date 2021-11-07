import React from "react";
import "./style.css";

const Winner = ({ winner, resetGame }) => {
  return (
    <div className="container">
      <div className="contestants">
        <div className={`card`}>
          <img
            className={`picture winner`}
            src={winner.image}
            alt={winner.name}
          />
          <label className="winnerText">{winner.name}</label>
          <p className="winnerText">{winner.house}</p>
        </div>
      </div>
      <div>
        <button className="btn" onClick={() => resetGame()}>
          Tentar novamente!
        </button>
      </div>
    </div>
  );
};

export default Winner;
