import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <StyledMain>
      <h2>WILLKOMMEN BEI VAN HOUTEM BÄDER</h2>
      <StyledImg src="../../images/2.JPG" />
      <p>
        Seit 1949 entwerfen und realisieren wir exklusive Bäder. Die langjährige
        Zusammenarbeit mit Handwerkern, Designern, Architekten und Zulieferern
        garantiert uns die hohe Qualität, die der Bau eines einzigartigen
        Badezimmers heute verlangt –egal ob es sich um ein Bad mit Fliesen,
        Naturstein oder Mosaik handelt.
      </p>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImg = styled.img`
  width: 200px;
`
