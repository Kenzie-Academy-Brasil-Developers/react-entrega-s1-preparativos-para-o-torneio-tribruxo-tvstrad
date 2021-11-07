import "./App.css";
import { useState, useEffect } from "react";
import Students from "./components/Students";
import Winner from "./components/Winner";

function App() {
  const [studentList, setStudentList] = useState([]);

  const [contestants, setContestants] = useState([]);

  const [houses, setHouses] = useState([
    "Gryffindor",
    "Slytherin",
    "Hufflepuff",
    "Ravenclaw",
  ]);

  const [show, setShow] = useState(true);

  const [showWinner, setshowWinner] = useState(true);

  const [winner, setWinner] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (studentList, houses) => {
    setHouses(shuffle(houses).splice(-1));
    setStudentList(shuffle(studentList));
    const first = studentList.find((student) => student.house === houses[0]);
    const second = studentList.find((student) => student.house === houses[1]);
    const third = studentList.find((student) => student.house === houses[2]);
    setContestants([first, second, third]);
    setShow(!show);
  };

  const handleWinner = (contestants) => {
    setshowWinner(!showWinner);
    setWinner(contestants[Math.floor(Math.random() * contestants.length)]);
  };

  const resetGame = () => {
    setshowWinner(true);
    setShow(true);
    setHouses(["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]);
  };
  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setStudentList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Torneio Tribruxo</h1>
      <div className="ContainerMain">
        {showWinner && show && (
          <h2> Clique no botao para retirar os nomes do chapeu seletor!</h2>
        )}
        {showWinner && show && (
          <button
            className="btn"
            onClick={() => handleClick(studentList, houses)}
          >
            Começar!
          </button>
        )}
        {showWinner && !show && (
          <Students contestants={contestants} handleWinner={handleWinner} />
        )}
        {!showWinner && <Winner winner={winner} resetGame={resetGame} />}
      </div>
    </div>
  );
}

export default App;
