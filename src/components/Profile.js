import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export default function Profile() {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div className='border border-orange-400 rounded-lg'>
      Welcome {auth.user}
      <button className='outline outline-green-400' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
