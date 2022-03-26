import "./styles.css";
import Form from "./components/Form";
import Recipies from "./components/Recipies";
import { Routes, Route, Switch } from "react-router";
import Recipe from "./components/Recipe";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipe/:recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}
