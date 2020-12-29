import React from 'react'
import Link from './styled/Link'
import Text from './styled/Text'

const Navbar = () => (
  <Text>
    <Link to="/">main </Link>
    <Link to="/journal">journal </Link>
  </Text>
)

export default Navbar
