import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import UploadToFirestore from '../firebase/UploadToFirestore'
import UploadImageToStorage from '../firebase/UploadImageToStorage'
import DeleteImageFromStorage from '../firebase/DeleteImageFromStorage'
import styled from 'styled-components'
import redcross from '../icons/redcross.svg'

export default function Admin() {
  const formRef = useRef()
  const dateRef = useRef()
  const newsRef = useRef()
  const widthRef = useRef()
  const heightRef = useRef()
  const [loading, setLoading] = useState(false)
  const [imageAsFile, setImageAsFile] = useState({})
  const [imageUrl, setImageUrl] = useState('')

  const [error, setError] = useState('')
  const { logout } = useAuth()
  const history = useHistory()
  return (
    <StyledAdminContainer>
      {error && alert(error)}
      <h2>Admin</h2>
      <StyledForm onSubmit={handleSubmit} ref={formRef}>
        <StyledLabel>
          <div>Datum:</div>
          <StyledInput type="date" ref={dateRef} />
        </StyledLabel>
        <StyledLabel>
          <div>Text:</div>
          <StyledTextarea type="text" ref={newsRef} />
        </StyledLabel>
        <StyledLabel>
          <div>Bildbreite (Verhältnis):</div>
          <StyledInput type="width" ref={widthRef} />
        </StyledLabel>
        <StyledLabel>
          <div>Bildhöhe (Verhältnis):</div>
          <StyledInput type="height" ref={heightRef} />
        </StyledLabel>

        {loading ? (
          <div>{/* <SpinningLogoIcon /> */}</div>
        ) : (
          imageUrl && <StyledImagePreview src={imageUrl} alt="Preview" />
        )}
        {imageAsFile.name && (
          <div className="description">
            <img src={redcross} alt="cancel" onClick={deleteImagePreview} />
            {'  '}
            {imageAsFile.name}
          </div>
        )}
        <StyledImageUpload>
          {imageUrl ? 'Bild ändern' : 'Bild auswählen'}
          <input type="file" onChange={uploadImageForPreview} />
        </StyledImageUpload>

        <button type="submit" disabled={loading}>
          Upload
        </button>
      </StyledForm>
      <button onClick={handleLogout}>Log out</button>
    </StyledAdminContainer>
  )

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await UploadToFirestore(
        {
          date: dateRef.current.value,
          news: newsRef.current.value,
          width: widthRef.current.value,
          height: heightRef.current.value,
        },
        imageUrl
      )
    } catch {
      setError('Upload failed')
    }
    setLoading(false)
    formRef.current.reset()
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
  function deleteImagePreview() {
    DeleteImageFromStorage(imageUrl, setImageUrl, setImageAsFile)
  }
  async function uploadImageForPreview(event) {
    event.persist()
    const image = await event.target.files[0]
    UploadImageToStorage(
      setLoading,
      image,
      setError,
      setImageUrl,
      setImageAsFile,
      imageUrl
    )
  }
}

const StyledAdminContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

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

const StyledTextarea = styled.textarea`
  min-width: 300px;
  max-width: 600px;
  min-height: 50px;
  max-height: 100px;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImagePreview = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 5px;
  object-fit: cover;
  display: block;
  margin-bottom: 5px;
`

const StyledImageUpload = styled.label`
  border-radius: 5px;
  color: var(--denim);
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  background-color: var(--lightgrey);
  border: 1px solid var(--font-color);
  padding: 6px 12px;
  display: block;
  cursor: pointer;
  input {
    display: none;
  }
`
