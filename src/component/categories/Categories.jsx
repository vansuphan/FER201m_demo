import React from 'react'
import style from './Categories.module.scss'
import market from '../../asserts/image/market.png'
import leftArrow from '../../asserts/image/left-arrow.png'
import rightArrow from '../../asserts/image/right-arrow.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Categories(props = {}) {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 2000,
    prevArrow : <img src={leftArrow} alt="" />,
    nextArrow: <img src={rightArrow} alt="" />,
    ...props
  };

  return (
    <div>
      <div className={style['cate-header']}>
        <div className={style['cate-header__title']}>Choose favourite course from top cartegories</div>
        <div className={style['cate-header__action']}>See all</div>
      </div>

      <div className={style['cate-body']}>        
        <Slider {...settings}>
          {[1,2,3,4,5,6,7].map((ele, index) => (
            <div key={index} className={style[`cate-item`]}>
                <img alt='market' src={market}/>
                <div className={style['cate-detail']}>
                  <div className={style['title']}>Marketing</div>
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
