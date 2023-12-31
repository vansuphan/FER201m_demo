import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./FormLogin.module.scss";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/icons/google.png";
import FbIcon from "../../assets/icons/facebook.png";
import AppleIcon from "../../assets/icons/apple.png";

export default function FormLoginNormal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: null, password: null });

  const onChangeUsername = (e) => {
    let errorData = { ...error };
    if (e.target?.value === "") {
      errorData = {
        ...errorData,
        username: "Please enter username",
      };
      setError(errorData);
    } else {
      errorData = {
        ...errorData,
        username: null,
      };
      setError(errorData);
    }
    setUsername(e.target.value);
  };

  const onChangePassword = async (e) => {
    let errorData = { ...error };
    if (e.target?.value === "") {
      errorData = {
        ...errorData,
        password: "Please enter password",
      };
      setError(errorData);
    } else {
      errorData = {
        ...errorData,
        password: null,
      };
      setError(errorData);
    }
    setPassword(e.target.value);
  };

  const onValidationsForm = () => {
    let errorData = { ...error };
    if (!username || username.trim() === "") {
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
    if (!password || !password.trim() === "") {
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

  const onSubmit = () => {
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      !password ||
      !username
    ) {
      onValidationsForm();
    } else {
      setError({
        username: null,
        password: null,
      });
      return {
        username,
        password,
      };
    }
  };

  useEffect(() => {
    setError({ username: null, password: null });
  }, []);

  return (
    <form className={styles.formLogin}>
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
          value={username}
          onChange={onChangeUsername}
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
          value={password}
          onChange={onChangePassword}
        />
        {error?.password && <p className={styles.error}>{error?.password}</p>}
        <a href="#">Forgot Password</a>
      </div>
      <div className={styles.fromItem}>
        <button type="button" onClick={onSubmit}>
          Sign in
        </button>
      </div>
    </form>
  );
}
