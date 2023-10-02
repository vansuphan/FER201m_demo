import React, { useEffect, useState } from "react";
import style from "./Card.module.scss";
import Demo1_IMG from "../../assets/images/demo/demo-01.png";
import Demo1_icon from "../../assets/images/demo/ci_group.png";
import Demo1_icon_2 from "../../assets/images/demo/ant-design_star-outlined.png";

export default function Card({
  image = Demo1_IMG,
  title = "Learn Marketing from Top Instructors.",
  student = "1.5k Students",
  time = "6 weeks",
  range = "4.5",
  monney = "30.5$",
}) {

  const [color, setColor] = useState("red");

  const onClickCard = () => {
    if (color === "red") { 
      setColor("green");
    } else {
      setColor("red");
    }
  }

  useEffect(() => {
    console.log("On change color []");
    return () => {
      console.log("");
    }
  }, []);
  useEffect(() => {
    console.log("On change color null");
  });
  useEffect(() => {
    console.log("On change color [color]");
  }, [color]);

  return (
    <div className={style.card} onClick={onClickCard}>
      <img src={image} alt="" />
      <div className={style.title}>
        <h4 style={{color: color}}>{title}</h4>
        <span>
          <img src={Demo1_icon_2} alt="" />
          {range}
        </span>
      </div>

      <div className={style.footer}>
        <span className={style.time}>{time}</span>
        <div className={style.student}>
          <img src={Demo1_icon} alt="" />
          <span>{student}</span>
        </div>
        <h3 className={style.monney}>{monney}</h3>
      </div>
    </div>
  );
}
