import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
/* eslint react/prop-types: 0 */

const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
  background-color: black;
`

interface Props {
  src: string;
}

const Image = ({ src }: Props) => <Img src={src} />

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
