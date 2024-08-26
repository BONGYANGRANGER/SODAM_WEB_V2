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
            <p>사업자등록번호</p>
            <input
              type="password"
              placeholder="사업자등록번호"
              className={style.inputField}
            />
          </div>
          <div>
            <p>통신판매업신고번호</p>
            <input
              type="password"
              placeholder="통신판매업신고번호"
              className={style.inputField}
            />
          </div>
          <div>
            <p>사업자명</p>
            <input
              type="text"
              placeholder="사업자명"
              className={style.inputField}
            />
          </div>
          <div>
            <p>농장 주소</p>
            <input
              type="text"
              placeholder="농장 주소"
              className={style.inputField}
            />
          </div>
          <div>
            <p>농장명</p>
            <input
              type="text"
              placeholder="농장명"
              className={style.inputField}
            />
          </div>
          <div>
            <p>정산계좌</p>
            <input
              type="text"
              placeholder="정산계좌"
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
