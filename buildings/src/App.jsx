import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </main>
  );
}

export default App;
