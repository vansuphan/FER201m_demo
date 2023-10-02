import React from "react";
import styles from "./LoginPage.module.scss";
// import FormLogin from '../../components/form-login/FormLogin';
import FormLoginNormal from "../../components/form-login/FormLoginNormal";
import SalyImg from "../../assets/images/Saly-1.png";

export default function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <section className={styles.Content}>
        <div className={styles.container}>
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
            <FormLoginNormal />
          </div>
        </div>
      </section>
      <section className={styles.Footer}></section>
    </div>
  );
}
