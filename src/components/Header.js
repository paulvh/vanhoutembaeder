import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <StyledWrapper>
      <StyledHeader>
        <div>Logo</div>
        <StyledIcon
          icon={isMenuVisible ? faTimes : faBars}
          onClick={toggleNav}
        />
      </StyledHeader>
      {isMenuVisible ? (
        <Navigation setIsMenuVisible={setIsMenuVisible} />
      ) : null}
    </StyledWrapper>
  )
  function toggleNav() {
    setIsMenuVisible(!isMenuVisible)
  }
}

const StyledWrapper = styled.div`
  position: relative;
  box-shadow: 0px 4px 4px #999;
`

const StyledHeader = styled.header`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  height: 52px;
  color: var(--lightgrey);
  background: var(--darkgrey);
`

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
`
