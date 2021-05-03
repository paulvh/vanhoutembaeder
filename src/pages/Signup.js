import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const formRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()

  return (
    <div>
      {error && alert(error)}
      <form onSubmit={handleSubmit} ref={formRef}>
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

        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )

  async function handleSubmit(event) {
    event.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an Account')
    }
    setLoading(false)
    formRef.current.reset()
  }
}
