import React from "react";
import Youtube from "./components/Youtube";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Youtube />} />
        <Route path="/video" element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;




// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [count, increase] = useState(0);
//   const [power, calculate] = useState(1);

//   // function cal() {

//   // }

//   useEffect(() => {
//     calculate(count * count);
//   }, [count]);

//   return (
//     <div>
//       <h1>The value of count is {count}</h1>
//       <button type="button" onClick={() => increase(count + 1)}>
//         Click
//       </button>
//       <h2>
//         Power of {count} is {power}
//       </h2>
//     </div>
//   );
// }

// export default App;
