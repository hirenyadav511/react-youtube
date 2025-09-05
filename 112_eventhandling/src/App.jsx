import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("hiren");
  const [form, setForm] = useState({});

  const handleClick = () => {
    alert("btn was clicked");
  };

  const handleMouseEvent = () => {
    alert("mouse over...");
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value});
    console.log(form);
    
  };

  return (
    <>
      <div className="btn">
        <button onClick={handleClick}>click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseEvent}>hey, i am a red div.</div> */}
       <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      /> <br />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
