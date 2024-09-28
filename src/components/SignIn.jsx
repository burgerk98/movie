import "./signIn.css";

export default function SigIn() {
  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <h3 className="sign-in__title">Sign In</h3>

        <form className="sign-in__form">
          <div className="sign-in__input-wrap">
            <div className="sign-in__form-wrap">
              <label htmlFor="sign-in-email">Email</label>
              <input
                type="email"
                id="sign-in-email"
                className="sign-in__input"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div className="sign-in__form-wrap">
              <label htmlFor="sign-in-password">Password</label>
              <input
                type="password"
                id="sign-in-password"
                className="sign-in__input"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </div>

          <button type="submit" className="sign-in__button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
