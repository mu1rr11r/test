import React, { useContext } from 'react'
import { AouthContext } from '../../context/AoutContext'

export default function Home() {
  const { token } = useContext(AouthContext)

  return (
    <div>Home</div>
  )
}
