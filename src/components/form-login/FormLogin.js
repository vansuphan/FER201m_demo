import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './FormLogin.module.scss';

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data: ", data);
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <div className={styles.fromItem}>
        <label htmlFor='username'>Username</label>
        <input {...register("username", { required: true })}
          id='username' type="text" maxLength={255} 
          name='username'
          aria-invalid={errors.username ? "true" : "false"}
        />
        {errors.username?.type === "required" && (
        <p role="alert">Username is required !</p>
      )}
      </div>
      <div className={styles.fromItem}>
        <label htmlFor='password'>Password</label>
        <input {...register("password", { required: true})}
          id='password'
          name='password'
          type="text"
          maxLength={255} 
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
        <p role="alert">Password is required !</p>
      )}
      </div>
      <div className={styles.fromItem}>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
