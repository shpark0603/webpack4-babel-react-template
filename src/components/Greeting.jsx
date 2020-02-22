import React from "react";

import "./Greeting.scss";

const Greeting = props => {
  return <h1>Hello current time is {props.time.toLocaleString()}</h1>;
};

export default Greeting;
