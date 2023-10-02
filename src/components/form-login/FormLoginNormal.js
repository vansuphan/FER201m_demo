import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './FormLogin.module.scss';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../assets/icons/google.png';
import FbIcon from '../../assets/icons/facebook.png';
import AppleIcon from '../../assets/icons/apple.png';

export default function FormLoginNormal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  }

  return (
    <form className={styles.formLogin} onSubmit={onSubmit}>
      <div className={styles.top}>
        <h4>Welcome to <span>LOREM</span></h4>
        <div>
          <p>No Account ?</p>
          <Link to={{pathname: "/signup"}}>Sign up</Link>
        </div>
      </div>
      <h3>Sign in</h3>
      <div className={styles.groupButton}>
        <button>
          <img alt='' srcSet={GoogleIcon} />
          <span>Sign in with Google</span>
        </button>
        <button>
          <img alt='' srcSet={FbIcon} />
        </button>
        <button>
          <img alt='' srcSet={AppleIcon} />
        </button>
      </div>
      <div className={styles.fromItem}>
        <label htmlFor='username'>Enter your username or email address</label>
        <input
          id='username' type="text" maxLength={255} 
          name='username'
          placeholder='Username or email address'
        />
      </div>
      <div className={styles.fromItem}>
        <label htmlFor='password'>Enter your Password</label>
        <input
          id='password'
          name='password'
          type="text"
          maxLength={255} 
          placeholder='Password'
        />
        <a href='#'>Forgot Password</a>
      </div>
      <div className={styles.fromItem}>
        <button type="submit">Sign in</button>
      </div>
    </form>
  )
}
