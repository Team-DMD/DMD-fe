import styled from "@emotion/styled"
import { BACKGROUNDMAIN, LOGO } from "../assets"
import { Button } from "../components"
import { Flex } from "flex-yeo"

export const Main = () => {
  return (
    <Background>
      <ContentWrapper>
      <Flex isColumn gap={12} alignItems="center">
        <Logo src={LOGO} alt="logo"/>
        <Button>START</Button>
      </Flex>
      </ContentWrapper>
      <BackgroundImg src={BACKGROUNDMAIN} alt="backgroundImg"/>
    </Background>
  )
}

const ContentWrapper = styled.div `
  z-index: 1;
`

const BackgroundImg = styled.img `
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  z-index: 0;
`

const Background = styled.div `
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img `
  width: 400px;
`