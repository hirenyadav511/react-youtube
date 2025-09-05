import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  return <div>hey, i am a {param.username}</div>;
};

export default User;
