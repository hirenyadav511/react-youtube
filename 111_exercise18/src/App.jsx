import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="container">
      {posts.map((post) => {
        return  <div
          className="card"
          key={post.id}
          style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}
        >
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>
        </div>;
      })}
    </div>
  );
}

export default App;
