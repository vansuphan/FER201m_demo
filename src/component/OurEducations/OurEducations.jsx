import "./our-educations.css";
import teacher from "./assets/image 3.png";
import bigbag from "./assets/Frame 6515.png";
import book from "./assets/Frame 6541.png";
import time from "./assets/Frame 6542.png";
import instructor from "./assets/Frame 6543.png";
import bag from "./assets/Frame 6544.png";

export default function OurEducations() {
  return (
    <>
      <div id="our-educations">
        <div className="p-3">
          <h2 style={{fontWeight:"bold"}}>We Bring The Good Education To Life</h2>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-start align-items-center">
            <div className="col-md-8 teacher-container">
              <img src={teacher} alt="" />
            </div>
            <div className="job-opportunities d-flex justify-content-center align-items-center shadow flex-column">
              <img src={bigbag} alt="" className="p-1" />
              <div className="text-center">
                <span style={{ color: "#09B451", fontSize: "1.3em" }} className="job-span">Job</span>
                <br />
                opportunities
              </div>
            </div>
          </div>
          <div className="col-lg-7 list-educations">
            <div>
              <h1 className="p-2" style={{fontWeight: "bold"}}>
                Let Your Education
                <br />
                Do The Walking
              </h1>
            </div>
            <div>
              <div className="edu-content row d-flex justify-content-center align-items-center mt-3">
                <div className="col-1">
                  <img src={book} alt="" className="p-1" />
                </div>
                <div className="col-11 d-flex align-items-center">
                  <div>Free E-book, Videos and kits</div>
                </div>
              </div>

              <div className="edu-content row d-flex justify-content-center align-items-center mt-3">
                <div className="col-1">
                  <img src={time} alt="" className="p-1" />
                </div>
                <div className="col-11 d-flex align-items-center">
                  <div>Learn at your own pace</div>
                </div>
              </div>

              <div className="edu-content row d-flex justify-content-center align-items-center mt-3">
                <div className="col-1">
                  <img src={bag} alt="" className="p-1" />
                </div>
                <div className="col-11 d-flex align-items-center">
                  <div>
                    Collaborate with different learners around the globe
                  </div>
                </div>
              </div>

              <div className="edu-content row d-flex justify-content-center align-items-center mt-3">
                <div className="col-1">
                  <img src={instructor} alt="" className="p-1" />
                </div>
                <div className="col-11 d-flex align-items-center">
                  <div>Top instructors around the globe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
