import React from "react";
import StudentsCard from "../StudentsCard";
import "./style.css";

const Students = ({ contestants, handleWinner }) => {
  return (
    <div className="container">
      <div className="contestants">
        {contestants.map((contestants, index) => (
          <StudentsCard key={index} student={contestants} />
        ))}
      </div>
      <div>
        <button className="btn" onClick={() => handleWinner(contestants)}>
          Revelar o vencedor !
        </button>
      </div>
    </div>
  );
};

export default Students;

// {studentList.map((student, index) => (
//      />
//   ))}
