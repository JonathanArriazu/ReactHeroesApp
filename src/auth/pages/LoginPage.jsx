import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    login('Jonathan Arriazu');

    navigate('/', {
      replace: true, // => reemplazo la ruta actual por la ruta indicada, entonces, si volvemos atras, no me devuelve a /login en este caso
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
