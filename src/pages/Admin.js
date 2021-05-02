import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import UploadToFirestore from '../firebase/UploadToFirestore'
import UploadImageToStorage from '../firebase/UploadImageToStorage'
import DeleteImageFromStorage from '../firebase/DeleteImageFromStorage'
import styled from 'styled-components'
import redcross from '../icons/redcross.svg'

export default function Admin() {
  const dateRef = useRef()
  const newsRef = useRef()
  const widthRef = useRef()
  const heightRef = useRef()
  const [loading, setLoading] = useState(false)
  const [imageAsFile, setImageAsFile] = useState({})
  const [imageUrl, setImageUrl] = useState('')

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
          <input type="file" onChange={uploadImageForPreview} required />
        </StyledImageUpload>

        {imageUrl ? 'Bild ändern' : 'Bild auswählen'}
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

const StyledImagePreview = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 5px;
  object-fit: cover;
  display: block;
  margin-bottom: 5px;
`

const StyledImageUpload = styled.label`
  margin-bottom: 15px;
  border-radius: 5px;
  color: var(--denim);
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  background-color: var(--white);
  border: 1px solid var(--denim);
  padding: 6px 12px;
  display: block;
  cursor: pointer;
  input {
    display: none;
  }
`
