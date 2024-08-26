import Style from './Style.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../assets/home/home-banner.png';

const Home = () => {
  return (
    <>
      <Header />
      <div className='inner'>
        <div className={Style.HomeContainer}>
          <img src={Banner} alt='' className={Style.notice} />
          <li>
            <ul>청과</ul>
            <ul>축산</ul>
            <ul>양곡</ul>
            <ul>기타</ul>
          </li>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
