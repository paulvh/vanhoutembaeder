import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [error, setError] = useState('')
  const { signup } = useAuth()

  return (
    <div>
      <form>
        <label>
          E-Mail:
          <input type="email" ref={emailRef} required />
        </label>
        <label>
          Passwort:
          <input type="password" ref={passwordRef} required />
        </label>
        <label>
          Confirm Passwort:
          <input type="password" ref={confirmPasswordRef} required />
        </label>

        <button onClick={handleSubmit} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )

  function handleSubmit(event) {
    event.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('passwords do not match')
    }
    try {
      signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an Account')
    }
  }
}
