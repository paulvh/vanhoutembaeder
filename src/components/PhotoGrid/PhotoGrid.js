import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withSize } from 'react-sizeme'

import Image from './Image'

import photos from './photos'

const propTypes = {
  photosPerColumn: PropTypes.number,
  onPhotoPress: PropTypes.func,
}

const defaultProps = {
  photosPerColumn: 10,
  onPhotoPress: () => {},
}

class PhotoGrid extends PureComponent {
  constructor(props) {
    super(props)
    this.getColumnWidth()
  }

  getColumnWidth() {
    let { size, photosPerColumn } = this.props

    if (window.innerWidth > 768) {
      photosPerColumn = 6
    }

    if (window.innerWidth > 1024) {
      photosPerColumn = 3
    }

    this.columnWidth = size.width / (photos.length / photosPerColumn)
  }

  renderColumns() {
    let columns = []
    let index = 0
    let current = 1

    photos.forEach((photo) => {
      if (!columns[index]) {
        columns[index] = []
      }
      columns[index].push(this.renderPhoto(photo))
      if (current < 3) {
        current++
      } else {
        current = 1
        index++
      }
    })

    return columns
  }

  renderPhoto(photo) {
    const { onPhotoPress } = this.props

    return (
      <Image
        key={photo.src}
        onPress={onPhotoPress}
        columnSize={this.columnWidth}
        {...photo}
      />
    )
  }

  render() {
    const columns = this.renderColumns()

    return (
      <div className="grid-container">
        <div className="grid">
          {columns.map((column, index) => (
            <div key={`.column${index}`} className="column">
              {column}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

PhotoGrid.propTypes = propTypes
PhotoGrid.defaultProps = defaultProps

export default withSize()(PhotoGrid)
