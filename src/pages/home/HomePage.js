import React from "react";
import Button from "../../components/button/Button";
import Card from "../../components/carrd/Card";
import Navbar from "../../components/navbar/Navbar";
import NavbarStrap from "../../components/navbar/NavbarStrap";
import NavigationStrap from "../../components/nav/NavigationStrap";
import Navigation from "../../components/nav/Navigation";
import * as Icon from "react-bootstrap-icons";
import ButtonGroup from "../../components/button/ButtonGroup";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Child1 from "../../components/child1/Child1";
import Child2 from "../../components/child2/Child2";
import InputClassComponent from "../../components/Input/InputClassComponent";
import styles from "./HomePage.module.scss";

export default function HomePage() {

  const onClickOutside = (event) => {
    console.log("onClickOutside: ", event);
  };

  const onChange = (event) => {
    console.log("onChange ", event?.target?.value);
  };

  const [content, setContent] = useState("App");

  const View = (content) => {
    console.log(content);
  };

  return (
    <div className={styles.HomePage}>
      {/* <Child1 content={content} setContent={setContent} onView={View} />
      <Child2 content={content} setContent={setContent} />
      <Card />
      <Input onChange={onChange} />
      <Button onClickOutside={onClickOutside} /> */}
      {/* <Navigation />
      <Navbar />
      <hr /> */}
      {/* <h3> Reactstrap components</h3> */}
      <NavigationStrap />
      {/* <NavbarStrap /> */}
      <section className="section-1 mt-5">
        <div className="container">
          {/* <ButtonGroup /> */}
          <div>
            <h3>Font font awesome </h3>
            <div>
              <i class="fa fa-phone fa-regular"></i>
              <i className="fa-solid fa-user"></i>

              <h3>Bootstrap font icon</h3>
              <div className="bootstrap-font-icon">
                <Icon.HouseDoorFill fontSize={30} />
                <Icon.HouseDoor fontSize={30} />
                <Icon.List fontSize={30} />
                <Icon.FileEarmarkFont fontSize={30} />
                <Icon.FileEarmarkFontFill fontSize={30} />
              </div>
            </div>
            <div style={{ width: "300px", margin: "auto" }}>
              <h3>V4</h3>
            </div>
            <div>
              <InputClassComponent componentName="hello" />
            </div>
          </div>
          {/* <div className='row'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
              <h4>col 1</h4>
              <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 2</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 3</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 4</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-4'>
                <h4>col 5</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-4'>
                <h4>col 6</h4>
            </div>
          </div> */}
        </div>
      </section>
      <hr />
      {/* <section>
        <div className="container">
          <div className="video" style={{ width: "300px", margin: "auto" }}>
          <h3>V5+</h3>
            <div class="ratio ratio-1x1">
              <div>1x1</div>
             
            </div>
            <div class="ratio ratio-4x3">
              <div>4x3</div>
            </div>
            <div class="ratio ratio-16x9">
              <div>16x9</div>
            </div>
            <div class="ratio ratio-21x9">
              <div>21x9</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <hr /> */}
      {/* <div className="list-card" style={{padding: "30px"}}>
        <Card title="Test" />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}
