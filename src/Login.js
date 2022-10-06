import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './components/auth'

export default function Login() {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user)
    // navigate('/', { replace: true })
    navigate(redirectPath, { replace: true })
  }

  return (
    <div>
      <lable className='border border-indigo-500'>
        Username:{' '}
        <input type='text' onChange={(e) => setUser(e.target.value)} />
      </lable>
      <button className='outline outline-red-400' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
