import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProblemOne from "./pages/ProblemOne/ProblemOne";
import ProblemTwo from "./pages/ProblemTwo/ProblemTwo";
import ProblemSix from "./pages/ProblemSix/ProblemSix";
import Navbar from "./components/Navbar/Navbar";
import ProblemSeven from "./pages/ProblemSeven/ProblemSeven";
import ProblemFour from "./pages/ProblemFour/ProblemFour";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProblemOne />}></Route>
        <Route path="/two" element={<ProblemTwo />}></Route>
        <Route path="/four" element={<ProblemFour />}></Route>
        <Route path="/six" element={<ProblemSix />}></Route>
        <Route path="/seven" element={<ProblemSeven />}></Route>
      </Routes>
    </div>
  );
}

export default App;
