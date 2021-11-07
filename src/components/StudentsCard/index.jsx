import React from "react";
import "./style.css";
import { useState } from "react";

const StudentsCard = ({ student }) => {
  const [imgExists, setimgExists] = useState(true);
  if (student.image.lenght === 0) {
    setimgExists(false);
  }
  return (
    <div>
      <div className={`card ${student.house.replace(/"/g, "")}`}>
        {imgExists ? (
          <img
            className={`picture ${student.house.replace(/"/g, "")}`}
            src={student.image}
            alt={student.name}
          />
        ) : (
          <img
            className={`picture ${student.house.replace(/"/g, "")}`}
            src={`../images/${student.house.replace(/"/g, "")}.jpeg`}
            alt={student.name}
          />
        )}

        <label>{student.name}</label>
        <p>{student.house}</p>
      </div>
    </div>
  );
};

export default StudentsCard;
