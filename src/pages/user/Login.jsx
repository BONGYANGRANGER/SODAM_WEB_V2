import style from './style.module.css';

const Login = () => {
  return (
    <div className={style.background}>
      <div className={style.loginContainer}>
        <h1>로그인</h1> <br /> <br />
        <form className={style.loginForm}>
          <div>
            <p>아이디</p>
            <input type='text' placeholder='아이디' className={style.idInput} />
            <br /> <br />
          </div>
          <div>
            <p>비밀번호</p>
            <input type='password' placeholder='비밀번호' className={style.passwordInput} />
            <br /> <br />
          </div>
          <button type='submit' className={style.loginBtn}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
