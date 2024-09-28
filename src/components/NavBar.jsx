import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        로고
      </Link>
      <div className="navbar__sign-wrap">
        <Link to="/sign-up" className="navbar__sign-up">
          회원가입
        </Link>
        <Link to="sign-in" className="navbar__sign-in">
          로그인
        </Link>
      </div>
    </div>
  );
}
