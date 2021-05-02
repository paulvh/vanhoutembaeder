import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import UploadToFirestore from '../contexts/UploadToFirestore'

export default function Admin() {
  const dateRef = useRef()
  const newsRef = useRef()
  const widthRef = useRef()
  const heightRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  return (
    <div>
      {error && alert(error)}
      Admin
      {currentUser.email}
      <form onSubmit={handleSubmit}>
        <input type="date" ref={dateRef} />
        <textarea type="text" ref={newsRef} />
        <input type="width" ref={widthRef} />
        <input type="height" ref={heightRef} />
        <button type="submit" disabled={loading}>
          Upload
        </button>
      </form>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await UploadToFirestore({
        date: dateRef.current.value,
        news: newsRef.current.value,
        width: widthRef.current.value,
        height: heightRef.current.value,
      })
    } catch {
      setError('Upload failed')
    }
    setLoading(false)
  }

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/')
    } catch {
      setError('Failed to log out')
    }
  }
}
