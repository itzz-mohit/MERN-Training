import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [listData, setlistData] = useState([]);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    axios
      .get("http://localhost:3000/card")
      .then((response) => {
        console.log(response.data);
        setlistData(response.data);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div className="flex flex-wrap mx-10">
        {listData.map((cardData, index) => (
          <Card data={cardData} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
