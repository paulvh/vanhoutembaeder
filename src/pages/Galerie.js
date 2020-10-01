import React from 'react'
import { useCallback, useState } from 'react'
import PHOTOS from '../util/photos'
// import Gallery from 'react-photo-gallery'
// import PictureCarousel from '../components/PictureCarousel'

import 'react-bnb-gallery/dist/style.css'
import ReactBnbGallery from 'react-bnb-gallery'

import { PhotoGrid } from '../components'

export default function Galerie() {
  const [galleryStatus, setGalleryStatus] = useState({
    isOpen: false,
    currentPhoto: null,
  })

  const onPhotoPress = useCallback((url) => {
    setGalleryStatus({
      isOpen: true,
      currentPhoto: url,
    })
  }, [])

  const onGalleryClose = useCallback(() => {
    setGalleryStatus({
      isOpen: false,
      currentPhoto: null,
    })
  }, [])

  const isOpen = galleryStatus.isOpen

  const photosToShow = galleryStatus.currentPhoto || PHOTOS

  return (
    <main>
      <h1>Galerie</h1>
      <PhotoGrid onPhotoPress={onPhotoPress} />
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS}
        onClose={onGalleryClose}
        wrap={false}
        showThumbnails={false}
      />
    </main>
  )
}
