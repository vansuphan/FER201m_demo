import style from './Courses.module.scss'
import { FadeIn } from 'react-animated-components';
import Card from '../../components/carrd/Card';
// import { courses } from '../../data/course';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { landingPageService } from '../../libs/services/landing-page-service';
import { useInView } from 'react-hook-inview';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [coursesRender, setCoursesRender] = useState([]);

  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  const getCourses = () => {
    axios.get("http://localhost:8080/courses").then(
      (res) => {
        console.log(res);
        setCourses(res?.data);
      },
      (error) => {
       }
    ).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setCoursesRender(courses);
    }
  }, [isVisible])

  return (
    <div id='courses' ref={ref}>
      <div className={style['courses-header']}>
        <div className={style['title']}>Most Popular courses</div>
        <div className={style['sort']}>
          <i className="fa-solid fa-chevron-down"></i>
          <div>Sort by</div>
        </div>
      </div>
      <div className='row g-5'>
        {coursesRender && coursesRender?.length && coursesRender?.map((course, index) => (
          <div className='col-md-4 col-sm-6' key={index}>
            <FadeIn delayMs={500 + index * 500} durationMs={500}>
              <Card
                image={course.image}
                title={course.title}
                range={course.rate}
                time={course.weeks}
                student={course.students}
                monney={course.price}
              />
            </FadeIn>
            
          </div>
        ))}
      </div>
    </div>
  )
}
