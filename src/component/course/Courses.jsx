import style from './Courses.module.scss'
import { FadeIn } from 'react-animated-components';
import Card from '../../components/carrd/Card';
import { courses } from '../../data/course';

export default function Courses() {
  return (
    <div id='courses'>
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
              image={course.image}
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
