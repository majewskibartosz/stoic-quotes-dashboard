import styled, { keyframes } from 'styled-components'

const FadeOutSlowAnimation = keyframes`  
  from { opacity: 1;}
  to { opacity: 0; }
`
const FadeOutSlow = styled(FadeOutSlowAnimation)`
  animation-name: ${FadeOutSlowAnimation};
`
export default FadeOutSlow
