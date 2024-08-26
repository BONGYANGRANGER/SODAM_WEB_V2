import Style from './Style.module.scss';
import Logo from '../../assets/logo_footer.png';
const Footer = () => {
  return (
    <>
      <footer className={Style.footerContainer}>
        <div className='inner'>
          <img src={Logo} alt='' className={Style.logo} />
          <p className={Style.title}>2024 해커그라운드 해커톤 참가작</p>
          <p>
            Copyrights ⓒ 이번 해커톤 옷 나쁘지 않네 2024 <br />
            All right reversed
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
