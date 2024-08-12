import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/buildings/" element={<Home />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
