import React from 'react'
import styled from 'styled-components'

export default function Article({ content }) {
  return (
    <div>
      <p>{content.news}</p>
      <StyledImg src={content.src} />
      <hr />
    </div>
  )
}

const StyledImg = styled.img`
  width: 200px;
`
