import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProblemOne from "./pages/ProblemOne/ProblemOne";
import ProblemTwo from "./pages/ProblemTwo/ProblemTwo";
import ProblemSix from "./pages/ProblemSix/ProblemSix";
import Navbar from "./pages/components/Navbar/Navbar";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProblemOne />}></Route>
        <Route path="/two" element={<ProblemTwo />}></Route>
        <Route path="/six" element={<ProblemSix />}></Route>
      </Routes>
    </div>
  );
}

export default App;
