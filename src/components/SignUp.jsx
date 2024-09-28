import "./signUp.css";

export default function SignUp() {
  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <h3 className="sign-up__title">Sign Up</h3>

        <form className="sign-up__form">
          <div className="sign-up__input-wrap">
            <div className="sign-up__form-wrap">
              <label htmlFor="sign-up-name">Name</label>
              <input
                type="text"
                id="sign-up-name"
                className="sign-up__input"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="sign-up__form-wrap">
              <label htmlFor="sign-up-email">Email</label>
              <input
                type="email"
                id="sign-up-email"
                className="sign-up__input"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div className="sign-up__form-wrap">
              <label htmlFor="sign-up-password">Password</label>
              <input
                type="password"
                id="sign-up-password"
                className="sign-up__input"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div className="sign-up__form-wrap">
              <label htmlFor="sign-up-confirm-password">Confirm Password</label>
              <input
                type="password"
                id="sign-up-confirm-password"
                className="sign-up__input"
                placeholder="비밀번호를 다시한번 입력하세요"
              />
            </div>
          </div>

          <button type="submit" className="sign-up__button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
