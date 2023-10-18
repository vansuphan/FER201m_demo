import "./student-reviews.css";
import leftImg from "./assets/left.png";
import rightImg from "./assets/right.png";
import stuMohhJumah from "./assets/Mohh Jumah.jpg";
import stuJohnMark from "./assets/John Mark.jpg";

export default function StudentReviews() {
  return (
    <>
      <div id="student-reviews">
        <div className="d-flex justify-content-center m-4">
          <h2>Reviews</h2>
        </div>

        <div className="row">
          <div className="row col-lg-5 p-5">
            <div className="col-lg-12 col-7 p-2">
              <h1>
                What our
                <br />
                <span className="span-students">Students</span> say
                <br />
                about us
              </h1>
            </div>
            <div className="col-lg-5 col-5 d-flex justify-content-between mt-4">
              <div className="col-4">
                <img src={leftImg} alt="" />
              </div>
              <div className="col-4">
                <img src={rightImg} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-7 p-3 row">

            <div className="col-sm-6 p-2">
              <div className="student-comment shadow d-flex flex-column justify-content-center align-items-center">
                <div className="row col-12 p-3">
                  <div className="col-3">
                    <img src={stuMohhJumah} alt="" />
                  </div>
                  <div className="col-9">
                    <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                      Mohh Jumah
                    </div>
                    <div style={{ color: "#09B451", fontSize: "0.9em" }}>
                      Senior Developer
                    </div>
                  </div>
                </div>
                <div className="col-12 p-3">
                  <div style={{ fontSize: "0.9em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur ac blandit nam massa massa elementum mollis
                    lectus. Sit ultricies nisl amet non, quis enim velit tempus.
                    Interdum duis imperdiet venenatis
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-2">
              <div className="student-comment shadow d-flex flex-column justify-content-center align-items-center">
                <div className="row col-12 p-3">
                  <div className="col-3">
                    <img src={stuJohnMark} alt="" />
                  </div>
                  <div className="col-9">
                    <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                      John Mark
                    </div>
                    <div style={{ color: "#09B451", fontSize: "0.9em" }}>
                      Data Analyst
                    </div>
                  </div>
                </div>
                <div className="col-12 p-3">
                  <div style={{ fontSize: "0.9em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur ac blandit nam massa massa elementum mollis
                    lectus. Sit ultricies nisl amet non, quis enim velit tempus.
                    Interdum duis imperdiet venenatis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
