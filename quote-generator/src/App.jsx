import axios from "axios";
import Quote from "./components/Quote";
import style from "./CSS/Quote.module.css";
import React, { useState, useEffect } from "react";

function App() {
  const [color, setcolor] = useState("#000000");
  const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  const [apiData, setapiData] = useState([]);

  const bgColorHandle = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setcolor(randomColor);
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * apiData.length);
    // console.log(randomIndex)
    setquote(apiData[randomIndex].text);
    const data = apiData[randomIndex].author;
    const beforeComma = data.split(",")[0].trim();
    setauthor(beforeComma);
  };
  useEffect(() => {
    setTimeout(() => {
      bgColorHandle();
    }, 2000);
  });

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      setapiData(res.data);
    });
  }, []);

  return (
    <div
      className={style.root}
      style={{
        backgroundColor: color,
        transition: "background-color 1s ease",
      }}
    >
      <Quote h={handleClick} q={quote} a={author} />
    </div>
  );
}

export default App;
