import React from 'react'
import styled from 'styled-components'
import FadeIn from './animations/FadeIn'

const Layer = styled.div`
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 2;
`

const Overlay = () => (
  <FadeIn>
    <Layer />
  </FadeIn>
)

export default Overlay
