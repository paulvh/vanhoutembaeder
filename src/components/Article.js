import React from 'react'

export default function Article({ text, photo }) {
  return (
    <div>
      <p>{text}</p>
      <StyledImg src={photo} />
    </div>
  )
}

const StyledImg = styled.img`
  width: 200px;
`
