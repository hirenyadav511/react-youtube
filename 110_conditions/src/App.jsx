import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "i am a todo",
    },
    {
      title: " another",
      desc: "i am a todo too",
    },
    {
      title: "hey im grocer todo",
      desc: "i am a todo but grocery",
    },
  ]);

  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //       <div className="m-4 border border-1 border-purple-400">
  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.desc}</div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showBtn ? (
        <button>showBtn is true</button>
      ) : (
        <button>showBtn is false</button>
      )}
      {/* {showBtn && <button>I will show only on second button is clicked</button> } */}

      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo} />;
         return (
      
        <div key={todo.title} className="m-4 border border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
    );
      })}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>toggle showBtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
