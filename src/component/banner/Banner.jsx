import './Banner.css'
import duplicate from '../../asserts/image/duplicate.png'
import userIcon from '../../asserts/image/userIcon.png'
import girlStudent from '../../asserts/image/girlStudent.png'

export default function Banner() {
  return (
    <div id='Banner' style={{position:"relative"}}>
      <div className="d-flex banner-background">
        <div className="left-corner"></div>
        <div className="right-corner"></div>
      </div>
      <div className="banner-main">
        <div className="col-md-6 banner-title d-flex align-items-center justify-content-center">
          <div>
            <h1>
                Quality<span className="highlight"> Education </span> <br/>By Any Means <br/> Necessary.
            </h1>
            <button>Get Started</button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center" style={{position:"relative"}}>
          <div className="banner-img">
              <img src={girlStudent} alt=""/>
          </div>
              <div className="banner-card-1">
                  <h3>Learn from best <br/><span className="highlight"> instructors </span>around <br/> the globe</h3>
                  <img src={duplicate} alt=""/>
              </div>
              <div className="banner-card-2">
                  <img src={userIcon} alt="" />
                  <h2 className="highlight">15k</h2>
                  <p>Amazing <br/> students around <br/> the globe</p>
              </div>
        </div>
      </div>
    </div>
  )
}
