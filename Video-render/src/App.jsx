import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/video" element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
