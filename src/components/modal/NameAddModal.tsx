import styled from "@emotion/styled"
import { Flex } from "flex-yeo"
import { Inputs } from "../Inputs"
import { Button } from "../Button"

export const NameAddModal = () => {
  return (
    <Back>
      <Flex isColumn gap={12}>
        <ModalContentWrapper>
          <Title>사용자 이름을 입력해주세요</Title>
        </ModalContentWrapper>
        <ModalContentWrapper>
          <Inputs placeholder="이름을 입력해주세요" label="사용자 이름 설정"/>
          <Button>이름 입력완료</Button>
        </ModalContentWrapper>
      </Flex>
    </Back>
  )
}

const ModalContentWrapper = styled.div `
  padding: 16px 20px;
  border-radius: 12px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Title = styled.div `
  font-size: 32px;
`

const Back = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`