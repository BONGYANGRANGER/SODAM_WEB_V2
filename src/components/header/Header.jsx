import { Link } from 'react-router-dom';
import Logo from '../../assets/header/logo.png';
import Style from './style.module.scss';

const Header = () => {
  return (
    <header className={Style.header}>
      <div className='inner'>
        <div className={Style.headContainer}>
          <Link to='/home' className={Style.logoLink}>
            <img src={Logo} alt='' className={Style.logoPng} />
          </Link>
          <div>
            <div className={Style.headNav}>
              <Link to='/login'>
                <nav>로그인</nav>
              </Link>
              <Link to='/register'>
                <nav>회원가입</nav>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
