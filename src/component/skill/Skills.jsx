import leftArrow from '../../asserts/image/left-arrow.png'
import rightArrow from '../../asserts/image/right-arrow.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { skills } from '../../data/skills';
import Card from '../card/Card';
import style from './Skills.module.scss'
import { useState, useEffect } from 'react';
import { landingPageService } from '../../libs/services/landing-page-service';

export default function Skills() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const [skills, setSkills] = useState([]);

  const getSkills = () => {
    landingPageService.getSkills()
      .then((response) => {
        setSkills(response?.data); 
      }
      )
  }

  useEffect(() => {
    getSkills();
  }, [])

  return (
    <div>
      <div className={style['skill-header']}>
        Learn a new skill in two hours
      </div>

      <div className={style['skill-body']}>
        <Slider {...settings}>
          {skills && skills?.length && skills.map((skill, index) => (
            <div className={style['skill-item']} key={index}>
              <Card
                urlImg={skill.image}
                title={skill.title}
                rating={skill.rate}
                numWeek={skill.weeks}
                numStudent={skill.students}
                price={skill.price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
