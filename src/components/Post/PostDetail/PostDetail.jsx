import { useParams } from 'react-router-dom';
import { posts } from '../../../data/postData';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import style from './style.module.css';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header />
      <div className={style.detailContainer}>
        <div className={style.detailBox}>
          <div className={style.detailLeft}>
            <h2>상품정보 상세</h2> <br />
            <img src={post.image} alt={post.productName} /> <br />
            <br />
            <button>장바구니 담기</button>
          </div>
          <div className={style.detailRight}>
            <div className={style.headerSection}>
              <p className={style.sellerName}>
                {post.sellerName} {`>`}
              </p>
              <h1 className={style.productName}>{post.productName}</h1>
            </div>
            <div className={style.detailContent}>
              <div className={style.labelColumn}>
                <p>카테고리</p>
                <p>남은수량</p>
                <p>배송가능지역</p>
                <p>도착예정일</p>
                <p>단가</p>
              </div>
              <div className={style.valueColumn}>
                <p>청과</p>
                <p>50개</p>
                <p>전체</p>
                <p>2024-08-30</p>
                <p className={style.price}>
                  <span>{post.price}</span>원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
