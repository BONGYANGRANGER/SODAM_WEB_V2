import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Style from './Style.module.scss';
import Logo from '../../assets/header/logo.png';
import Button from '../../components/button/Button';
import BannerShadow from '../../assets/landing/banner-shadow.png';
import BannerVeg from '../../assets/landing/banner-veg.png';
import InfoOne from '../../assets/landing/info-1.png';
import InfoTwo from '../../assets/landing/info-2.png';

const Landing = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={Style.banner1}>
          <div className='inner'>
            <div className={Style.bannerFlex}>
              <div className={Style.flexbox}>
                <h1>소담한 농산물을 집에서 편리하게</h1>
                <img src={Logo} alt='' className={Style.logoPng} />
                <Button value={'시작하기'} color={1} className={Style.startBtn} />
              </div>
              <div className={Style.flexbox}>
                <img src={BannerVeg} alt='' className={Style.veg} />
                <img src={BannerShadow} alt='' className={Style.shadow} />
              </div>
            </div>
          </div>
        </section>
        <section className={Style.banner2}>
          <div className='inner'>
            <div className={Style.bannerFlexes}>
              <img src={InfoOne} alt='' />
              <div>
                <h1>
                  투명하고 간편한
                  <br />
                  구매/판매 정보
                </h1>
                <p>판매자, 구매자 모두 상품 상세나 수익 등 중요한 정보를 손쉽게 확인할 수 있어요.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={Style.banner3}>
          <div className='inner'>
            <div className={Style.bannerFlexes}>
              <div>
                <h1>
                  농사 일지를 통한
                  <br />
                  브랜딩 지원
                </h1>
                <p>농부 일지를 작성하면 AI가 그림일기 형식으로 전환해줘요.</p>
              </div>
              <img src={InfoTwo} alt='' />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
