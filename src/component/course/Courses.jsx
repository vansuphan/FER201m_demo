import style from './Courses.module.scss'
import { courses } from '../../data/course';
import Card from '../../components/carrd/Card';
import { FadeIn } from 'react-animated-components';

export default function Courses() {
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
            <FadeIn delayMs={100 + index * 200} durationMs={1000}>
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
