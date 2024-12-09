import React from 'react'
import useAuth from "../custom-hooks/Authuse"
import { Navigate } from 'react-router-dom'

export default function Protected({Children}) {
const {currentUser} = useAuth()

  return currentUser ? Children :<Navigate to='/login'/>
}
