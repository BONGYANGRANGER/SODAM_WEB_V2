import { Link } from "react-router-dom";
import style from "./style.module.css";

const SignUp = () => {
  return (
    <div className={style.background}>
      <div className={style.signUpContainer}>
        <h1>회원가입</h1>
        <form className={style.signUpForm}>
          <div>
            <p>아이디</p>
            <input
              type="text"
              placeholder="아이디"
              className={style.inputField}
            />
          </div>
          <div>
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호"
              className={style.inputField}
            />
          </div>
          <div>
            <p>이메일</p>
            <input
              type="email"
              placeholder="이메일"
              className={style.inputField}
            />
          </div>
          <div>
            <p>이름</p>
            <input
              type="text"
              placeholder="이름"
              className={style.inputField}
            />
          </div>
          <div>
            <p>전화번호</p>
            <input
              type="tel"
              placeholder="전화번호 (예시: 010-1234-5678)"
              className={style.inputField}
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <p>배송지</p>
            <input
              type="text"
              placeholder="배송지"
              className={style.inputField}
            />
          </div>
          <button type="submit" className={style.signUpBtn}>
            회원가입
          </button>
          <Link to="/login" className={style.linkSignUp}>
            이미 계정이 있으신가요? 로그인
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
