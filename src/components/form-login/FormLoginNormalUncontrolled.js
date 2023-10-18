/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./FormLogin.module.scss";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/google.png";
import FbIcon from "../../assets/icons/facebook.png";
import AppleIcon from "../../assets/icons/apple.png";

export default function FormLoginNormalUncontrolled() {
  const [error, setError] = useState({ username: null, password: null });
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const onValidationsForm = () => {
    let errorData = {
      username: null,
      password: null,
    };
    if (
      !usernameRef?.current?.value ||
      usernameRef?.current?.value.trim() === ""
    ) {
      errorData = {
        ...errorData,
        username: "Please enter username",
      };
    } else {
      errorData = {
        ...errorData,
        username: null,
      };
    }
    if (
      !passwordRef?.current?.value ||
      !passwordRef?.current?.value.trim() === ""
    ) {
      errorData = {
        ...errorData,
        password: "Please enter password",
      };
    } else {
      errorData = {
        ...errorData,
        password: null,
      };
    }
    setError({ ...errorData });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      usernameRef?.current?.value.trim() === "" ||
      passwordRef?.current?.value.trim() === "" ||
      !passwordRef?.current?.value ||
      !usernameRef?.current?.value
    ) {
      onValidationsForm();
    } else {
      setError({
        username: null,
        password: null,
      });
      const dataSubmit = {
        username: usernameRef?.current?.value,
        password: passwordRef?.current?.value,
      }
      console.log(dataSubmit);
      return dataSubmit;
    }
  };

  return (
    <form className={styles.formLogin} onSubmit={onSubmit}>
      <div className={styles.top}>
        <h4>
          Welcome to <span>LOREM</span>
        </h4>
        <div>
          <p>No Account ?</p>
          <Link to={{ pathname: "/signup" }}>Sign up</Link>
        </div>
      </div>
      <h3>Sign in</h3>
      <div className={styles.groupButton}>
        <button type="button">
          <img alt="" srcSet={GoogleIcon} />
          <span>Sign in with Google</span>
        </button>
        <button type="button">
          <img alt="" srcSet={FbIcon} />
        </button>
        <button type="button">
          <img alt="" srcSet={AppleIcon} />
        </button>
      </div>
      <div className={styles.fromItem}>
        <label htmlFor="username">Enter your username or email address</label>
        <input
          id="username"
          type="text"
          maxLength={255}
          name="username"
          placeholder="Username or email address"
          ref={usernameRef}
        />
        {error?.username && <p className={styles.error}>{error?.username}</p>}
      </div>
      <div className={styles.fromItem}>
        <label htmlFor="password">Enter your Password</label>
        <input
          id="password"
          name="password"
          type="text"
          maxLength={255}
          placeholder="Password"
          ref={passwordRef}
        />
        {error?.password && <p className={styles.error}>{error?.password}</p>}
        <a href="#">Forgot Password</a>
      </div>
      <div className={styles.fromItem}>
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
}
