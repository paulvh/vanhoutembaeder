import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const history = useHistory()

  return (
    <div>
      {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <label>
          E-Mail:
          <input type="email" ref={emailRef} required />
        </label>
        <label>
          Passwort:
          <input type="password" ref={passwordRef} required />
        </label>

        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
    </div>
  )

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/admin')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }
}
