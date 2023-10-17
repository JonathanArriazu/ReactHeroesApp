import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
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
