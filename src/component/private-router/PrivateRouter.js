import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRouter({ children }) {

  const isLogin = false;

  if (isLogin) {
    return children
  }
  return (
    <Navigate to={"/login"} />
  )
}
