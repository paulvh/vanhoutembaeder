import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation({ setIsMenuVisible }) {
  return (
    <StyledNavigation onClick={() => setIsMenuVisible(false)}>
      <StyledUl>
        <StyledLi>
          <NavLink to="/">Home</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink to="/galerie">Galerie</NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </StyledLi>
      </StyledUl>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  position: absolute;
  left: 0;
  top: 52px;
  color: var(--black);
  background: var(--lightgrey);
  width: 100%;
  padding: 1rem;
  opacity: 0.9;
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledLi = styled.li`
  padding: 0.5rem 0;
`
