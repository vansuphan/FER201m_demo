import Menu from '../../component/menu/Menu';
import Banner from '../../component/banner/Banner';
import Feature from '../../component/features/Feature';
import Categories from '../../component/categories/Categories';
import Courses from '../../component/course/Courses';
import Skills from '../../component/skill/Skills';
import OurEducations from '../../component/OurEducations/OurEducations';
import StudentReviews from '../../component/StudentReviews/StudentReviews';
import Instructors from '../../component/Instructors/Instructors';
import StudentFirstSteps from '../../component/StudentFirstSteps/StudentFirstSteps';
import Footer from '../../component/footer/Footer';

export default function HomePage() {
  return (
      <div>
        <div className='container'>
            <Menu />
            <Banner />
            <Feature />
            <Categories/>
            <Courses/>
            <Skills/>
            <OurEducations />
            <StudentReviews />
            <Instructors />
        </div>
        <StudentFirstSteps />
        <Footer/>
      </div>
  )
}
