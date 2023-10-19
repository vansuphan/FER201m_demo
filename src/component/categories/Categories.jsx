import React, { useEffect, useState } from 'react'
import style from './Categories.module.scss'
import leftArrow from '../../asserts/image/left-arrow.png'
import rightArrow from '../../asserts/image/right-arrow.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { landingPageService } from '../../libs/services/landing-page-service'
// import {encode, decode} from 'string-encode-decode'
// const test = {name: "test", email: 'test@example.com', password: "test"};
// const encryptedString =encode(JSON.stringify(test));
// const decryptedString = decode(encryptedString);
// const dataJson = JSON.parse(decryptedString);
  
export default function Categories(props = {}) {
  const [categories, setCategories] = useState([]);
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img {...props} src={leftArrow} alt="" />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img {...props} src={rightArrow} alt="" />
  );
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    ...props
  };

  const getCartegories = () => {
    landingPageService.getCategories().then(
      (res) => {
        if (res?.data) {
          setCategories(res.data);
        }
      }
    )
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getCartegories();
  }, [])


  return (
    <div id='categories'>
      <div className={style['cate-header']}>
        <div className={style['cate-header__title']}>Choose favourite course from top cartegories</div>
        <div className={style['cate-header__action']}>See all</div>
      </div>

      <div className={style['cate-body']}>
        <Slider {...settings}>
          {categories && categories?.length > 0 && categories.map((item, index) => (
            <div key={index} className={style[`cate-item`]}>
              <img className={style['cate-img']} alt='market' src={item?.image} />
              <div className={style['cate-detail']}>
                <div className={style['title']}>{item?.title}</div>
                <div className={style['content']}>
                  is the process of exploring, creating, and delivering value to meet the needs of a
                  target market in terms of goods and services; potentially including selection of a
                  target audience; selection of certain attributes or themes to emphasize in advertising;
                  operation of advertising campaigns; attendance at trade shows and public events;
                  design of products and packaging attractive to buyers;
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
