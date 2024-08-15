import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import BlogPage from "./pages/BlogPage";
import Er from "./pages/Er";

function App() {
  return (
    <Routes>
      <Route path="/rezultAgency/" element={<Home />} />
      <Route path="/invest/" element={<Invest />} />
      <Route path="/blog/" element={<BlogPage />} />
      <Route path="*" element={<Er />} />
    </Routes>
  );
}

export default App;
