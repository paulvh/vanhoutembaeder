import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

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
      <h2>Log In</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          <div>E-Mail:</div>
          E-Mail:
          <StyledInput type="email" ref={emailRef} required />
        </StyledLabel>
        <StyledLabel>
          <div>Passwort:</div>
          Passwort:
          <inpStyledInputt type="password" ref={passwordRef} required />
        </StyledLabel>

        <button disabled={loading} type="submit">
          Log In
        </button>
      </StyledForm>
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 20px;
`
const StyledInput = styled.input`
  min-width: 300px;
  max-width: 600px;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`
