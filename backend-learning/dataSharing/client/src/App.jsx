import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import InputField from "./InputField";


function App() {
  const [listData, setlistData] = useState([]);
  const [mdl, setmdl] = useState("");

  useEffect(() => {
    handleClick();
  }, [listData]);

  const sendData = () => {
    axios
      .post("http://localhost:3000/data", {
        mdl: mdl,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };

  const handleClick = () => {
    axios
      .get("http://localhost:3000/card")
      .then((response) => {
        //console.log(response.data);
        setlistData(response.data);
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center mt-5">
        Data Sharing
      </h1>
      <InputField sendData={sendData} textData={setmdl} />
      <div className="flex flex-wrap mx-10">
        {listData.map((cardData, index) => (
          <Card data={cardData} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
