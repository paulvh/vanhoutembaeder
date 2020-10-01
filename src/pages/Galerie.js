import React from 'react'
import { useCallback, useState } from 'react'
import { photos } from '../util/photos'
import Gallery from 'react-photo-gallery'
import PictureCarousel from '../components/PictureCarousel'

export default function Galerie() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  return (
    <main>
      <h1>Galerie</h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <PictureCarousel
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        photos={photos}
        viewerIsOpen={viewerIsOpen}
        setViewerIsOpen={setViewerIsOpen}
      />
    </main>
  )
}
