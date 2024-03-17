import React from "react";
import { useLocation } from "react-router-dom";

const WastePOIList = () => {
  const location = useLocation();
  const username = location.state.user.userName;
  console.log(username);
  return <div>{username}</div>;
};

export default WastePOIList;
