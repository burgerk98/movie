import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    onSearch(inputValue);
  };

  const handleNavClick = () => {
    setSearchInput("");
    onSearch("");
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo" onClick={handleNavClick}>
        로고
      </Link>
      <input
        type="text"
        placeholder="영화 검색"
        value={searchInput}
        onChange={handleSearch}
        className="navbar__search-input"
      />
      <div className="navbar__sign-wrap">
        <Link
          to="/sign-up"
          className="navbar__sign-up"
          onClick={handleNavClick}
        >
          회원가입
        </Link>
        <Link to="sign-in" className="navbar__sign-in" onClick={handleNavClick}>
          로그인
        </Link>
      </div>
    </div>
  );
}
