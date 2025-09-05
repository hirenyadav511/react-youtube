import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // case : 1 run on every render

  useEffect(() => {
    alert("Hey, I will run on every render.");
  });

  // case : 2 run only on first render

  useEffect(() => {
    alert("Hey, welcome to my page. This is the first render.");
  }, []);

  // case : 3 run only when certain value change

  useEffect(() => {
    alert("Hey I am running because color was changed.");
  }, [color]);

  // Example of Cleanup function

  useEffect(() => {
    alert("Hey, welcome to my page. This is the first render on app.jsx.");
    return () => {
      alert("component was unmount.");
    };
  }, []);

  useEffect(() => {
    alert("color was changed");
  });
  return (
    <div>
      <h4>i am a navbar of {color} color hehe....</h4>
    </div>
  );
};

export default Navbar;
