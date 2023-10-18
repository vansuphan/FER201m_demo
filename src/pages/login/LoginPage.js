import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
// import FormLogin from '../../components/form-login/FormLogin';
import FormLoginNormal from "../../components/form-login/FormLoginNormal";
import SalyImg from "../../assets/images/Saly-1.png";
import Ellipse3 from "../../assets/images/Ellipse3.png";
import Ellipse4 from "../../assets/images/Ellipse4.png";
import CancelIcon from "../../assets/icons/icon-cancel.png";
import FormLoginNormalUncontrolled from "../../components/form-login/FormLoginNormalUncontrolled";
import { useNavigate } from "react-router-dom";
import Menu from "../../component/menu/Menu";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.LoginPage}>
      <section className={styles.Content}>
        <div className={styles.container}>
          <div className={styles.menu}>
            {/* <h3 onClick={() => navigate('/home')}>Home</h3> */}
            <Menu bgTransparent hideBtnLogin/>
          </div>
          <div className={styles.Des}>
            <div>
              <h1>Sign in to </h1>
              <h3>Lorem Ipsum is simply </h3>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`}
              </p>
            </div>
            <img alt="" srcSet={SalyImg} />
          </div>
          <div className={styles.LoginForm}>
            {/* <FormLoginNormal /> */}
            <FormLoginNormalUncontrolled />
          </div>
        </div>
      </section>
      <section className={styles.Footer}>
        <div className={styles.container}>
          <div className={styles.listItem}>
            <div className={styles.item}>
              <img src={Ellipse3} alt="" />
              <h4>John peter</h4>
              <p>Active 1 days ago</p>
              <img className={styles.CancelIcon} src={CancelIcon} alt="" />
            </div>
            <div className={styles.item}>
              <img src={Ellipse4} alt="" />
              <h4>Alina shmen</h4>
              <p>Active 4 days ago</p>
              <img className={styles.CancelIcon} src={CancelIcon} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
