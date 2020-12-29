/* eslint-disable no-undef */
import React from 'react'
import styled from 'styled-components'
import CenterContainer from './shared-styles/CenterContainer'
import Text from './shared-styles/Text'

const JournalText = styled(Text)`
  width: 100%;
  color: white;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 350%;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 37%;
  left: 50%;
  transform: translate(-50%, 60%);
`
const Journal = () => (
  <CenterContainer>
    <JournalText>This is Journal.</JournalText>
  </CenterContainer>
)

export default Journal
