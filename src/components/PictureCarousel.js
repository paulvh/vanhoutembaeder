import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default function PictureCarousel({
  currentImage,
  setCurrentImage,
  viewerIsOpen,
  setViewerIsOpen,
  photos,
}) {
  function closeLightbox() {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={photos.map((x) => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title,
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  )
}
