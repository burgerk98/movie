import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";
import SigIn from "./components/SignIn";
import SignUp from "./components/Signup";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieCard />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SigIn />} />
        {/* 계령아.. 아이디...잊지마...  */}
      </Routes>
    </>
  );
}

export default App;
