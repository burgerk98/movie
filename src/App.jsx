import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieCard />} />
      <Route path="/details" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
