import "./instructors.css";
import insJohnMark from "./assets/John Mark.jpg";
import insLoraShrof from "./assets/Lora Shrof.jpg";
import insZengChin from "./assets/Zeng Chin.jpg";
import { useEffect, useState } from "react";

export default function Instructors() {

  const showInfo = {
    width: "100%",
    opacity: "1",
  };
  const hideInfo = {
    width: "0",
    opacity: "0",
  };
  const [showJohnMark, setShowJohnMark] = useState(hideInfo);
  const [showLoraShrof, setShowLoraShrof] = useState(hideInfo);
  const [showZengChin, setShowZengChin] = useState(hideInfo);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }  

  const handleShowJohnMark = () => {
    setShowJohnMark(showInfo);
    setTimeout(handleHideJohnMark, randomNumber(3000, 6000));
  };
  const handleHideJohnMark = () => {
    setShowJohnMark(hideInfo);
    setTimeout(handleShowJohnMark, randomNumber(3000, 6000));
  };

  const handleShowLoraShrof = () => {
    setShowLoraShrof(showInfo);
    setTimeout(handleHideLoraShof, randomNumber(3000, 6000));
  };
  const handleHideLoraShof = () => {
    setShowLoraShrof(hideInfo);
    setTimeout(handleShowLoraShrof, randomNumber(3000, 6000));
  };
  const handleShowZengChin = () => {
    setShowZengChin(showInfo);
    setTimeout(handleHideZengChin, randomNumber(3000, 6000));
  };
  const handleHideZengChin = () => {
    setShowZengChin(hideInfo);
    setTimeout(handleShowZengChin, randomNumber(3000, 6000));
  };
  useEffect(() => {
    randomNumber(1, 3) == 1 ? handleShowJohnMark() : handleHideJohnMark();
    randomNumber(1, 3) == 1 ? handleShowLoraShrof() : handleHideLoraShof();
    randomNumber(1, 3) == 1 ? handleShowZengChin() : handleHideZengChin();
  }, []);

  return (
    <>
      <div id="instructors" className="p-5">
        <div>
          <h2 style={{ fontWeight: "bold" }}>Meet our instructors</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 instructor-container mt-5">
            <div className="p-2">
              <img src={insJohnMark} alt="" className="big-avatar" />
            </div>

            <div
              style={showJohnMark}
              className="instructor-overlay d-flex justify-content-center align-items-center"
            >
              <div
                style={{ width: "90%", height: "90%" }}
                className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded"
              >
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <img src={insJohnMark} alt="" className="col-2" />
                  <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    John Mark
                  </div>
                  <p style={{ color: "#09B451" }}>Senior Developer</p>
                </div>
                <div>
                  <blockquote className="blockquote text-center p-3">
                    <p>
                      “Education will be for you
                      <br />
                      what you want it to be”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 instructor-container mt-5">
            <div className="p-2">
              <img src={insLoraShrof} alt="" className="big-avatar" />
            </div>
            <div
              style={showLoraShrof}
              className="instructor-overlay d-flex justify-content-center align-items-center"
            >
              <div
                style={{ width: "90%", height: "90%" }}
                className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded"
              >
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <img src={insLoraShrof} alt="" className="col-2" />
                  <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Lora Shrof
                  </div>
                  <p style={{ color: "#09B451" }}>Marketing Lead</p>
                </div>
                <div>
                  <blockquote className="blockquote text-center p-3">
                    <p>
                      “Knowledge has to be improved,
                      <br />
                      challenged, and increased
                      <br />
                      constantly, or it vanishes”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 instructor-container mt-5">
            <div className="p-2">
              <img src={insZengChin} alt="" className="big-avatar" />
            </div>

            <div
              style={showZengChin}
              className="instructor-overlay d-flex justify-content-center align-items-center"
            >
              <div
                style={{ width: "90%", height: "90%" }}
                className="d-flex flex-column justify-content-center align-items-center shadow-sm rounded"
              >
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <img src={insZengChin} alt="" className="col-2" />
                  <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Zeng Chin
                  </div>
                  <p style={{ color: "#09B451" }}>Data Analist at Meta</p>
                </div>
                <div>
                  <blockquote className="blockquote text-center p-3">
                    <p>
                      “To know that we know what we
                      <br />
                      know, and to know that we do not
                      <br />
                      know what we do not know, that is
                      <br />
                      true knowledge”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
