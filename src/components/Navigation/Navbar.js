import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Text = styled.div`
  width: 100%;
  padding-top: 20px;
  text-align: center;
  position: absolute;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: normal;
  user-select: none;
  z-index: 1;
`

const StyledLink = styled(Link)`
  color: white;
`

const Navbar = () => (
  <Text>
    <Link to="/">main </Link>
    <Link to="/journal">journal </Link>
  </Text>
)

export default Navbar
