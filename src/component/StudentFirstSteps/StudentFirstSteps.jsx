import "./student-first-steps.css";
import studentImg from "./assets/student.jpg";
export default function StudentFirstSteps() {
  return (
    <div id="student-first-steps">
      <div className="student-steps">       
        <div className="container">
          <div className="row p-3">
            <div className="col-lg-6 student-image d-flex justify-content-center d-none d-lg-block">
              <img src={studentImg} alt="" className="" />
            </div>
            <div className="col-lg-6 student-info">
              <div className="student-msg p-3">
                <h1>
                  You don’t have to see the
                  <br />
                  whole staircase just take
                  <br />
                  the first step
                </h1>
                <br />
                <p>
                  Amet in a suspendisse convallis eget, Amet in a suspendisse
                  convallis egetAmet in a
                </p>
              </div>
              <div className="student-buttons col-lg-8 mt-5 mb-5 d-flex justify-content-around">
                <button type="button"> Get Started</button>
                <button type="button">Place a Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
