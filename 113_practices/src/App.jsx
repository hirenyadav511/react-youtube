import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cards, setCards] = useState([]);

  const handleCard = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    handleCard();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card) => {
          return (
            <div className="cards">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
