import style from './Courses.module.scss'
// import { courses } from '../../data/course';
import Card from '../../components/carrd/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Courses() {

  const [courses, setCourses] = useState([]);

  const getCourses = () => {
    axios.get(process.env.REACT_APP_API_URL + '/courses').then(
      (res) => {
        if (res?.data) {
          setCourses(res?.data);
        }
      }
    )
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getCourses();
  }, []);


  return (
    <div>
      <div className={style['courses-header']}>
        <div className={style['title']}>Most Popular courses</div>
        <div className={style['sort']}>
          <i className="fa-solid fa-chevron-down"></i>
          <div>Sort by</div>
        </div>
      </div>
      <div className='row g-5'>
        {courses && courses?.length && courses?.map((course, index) => (
          <div className='col-md-4 col-sm-6' key={index}>
            <Card
              image={process.env.REACT_APP_API_URL + "/" +course.image}
              title={course.title}
              range={course.rate}
              time={course.weeks}
              student={course.students}
              monney={course.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
