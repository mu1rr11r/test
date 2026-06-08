import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AouthContext } from '../../context/AoutContext'

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AouthContext)
  if (!token) return <Navigate to="/login" replace />
  return children
}
