import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from './Image'
import CenterContainer from './shared-styles/CenterContainer'

const Container = styled(CenterContainer)`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  object-position: 50% 50%;
  z-index: auto;
  background-color: black;
`

const Background = () => {
  const [photo, setPhoto] = useState()

  useEffect(() => {
    const url = 'https://source.unsplash.com/collection/477172/1600x900/daily'
    const getRandomPhoto = () => {
      setPhoto(url)
    }
    getRandomPhoto()
  }, [])

  return (
    <Container>
      <Image src={photo} />
    </Container>
  )
}

export default Background
