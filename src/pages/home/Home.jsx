import Post from '../../components/Post/Post';
import { posts } from '../../data/postData';
import Header from '../../components/header/Header';
import Style from './Style.module.scss';
import Notice from '../../assets/home/notice.png';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('청과');

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  const filteredPosts = posts.filter(post => {
    if (selectedCategory === '청과') return !post.studyOrProject;
    if (selectedCategory === '축산') return post.studyOrProject;
    return selectedCategory === '청과';
  });

  return (
    <>
      <Header />
      <main className={Style.mainContainer}>
        <div className='inner'>
          <div className={Style.notice}>
            <img src={Notice} alt='공고문' className={Style.notice} />
          </div>

          <section className={Style.projectSection}>
            <li>
              {['청과', '축산', '양곡', '기타'].map(category => (
                <ul
                  key={category}
                  className={`${Style.tab} ${selectedCategory === category ? Style.active : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </ul>
              ))}
            </li>
            <div className={Style.postGrid}>
              {filteredPosts.map(post => (
                <Post
                  key={post.id}
                  id={post.id}
                  image={post.image}
                  sellerName={post.sellerName}
                  productName={post.productName}
                  price={post.price}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
