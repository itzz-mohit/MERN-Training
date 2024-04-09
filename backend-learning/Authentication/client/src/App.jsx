import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/data").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div>App</div>;
}

export default App;


