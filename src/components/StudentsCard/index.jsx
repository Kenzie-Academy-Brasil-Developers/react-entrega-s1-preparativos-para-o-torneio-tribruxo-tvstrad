import React from "react";
import "./style.css";

const StudentsCard = ({ student }) => {
  return (
    <div>
      <div className={`card ${student.house.replace(/"/g, "")}`}>
        <img
          className={`picture ${student.house.replace(/"/g, "")}`}
          src={student.image}
          alt={student.name}
        />
        <label>{student.name}</label>
        <p>{student.house}</p>
      </div>
    </div>
  );
};

export default StudentsCard;
