import React, { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import webpackImg from "./assets/webpack.png";
import { hot } from "react-hot-loader/root";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [setTime]);

  return (
    <div>
      <Greeting time={time} />
      <h1>Webpack4 Babel config for React</h1>
      <img src={webpackImg} alt="webpack" />
    </div>
  );
};

export default hot(App);
