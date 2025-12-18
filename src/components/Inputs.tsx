import styled from "@emotion/styled"

export const Inputs = () => {
  return (
    <Input type="text" />
  )
}

const Input = styled.input `
  width: 100%;
  height: 54px;
  border-radius: 8px;
  border: dashed 3px #333333;
  padding: 8px 12px;
  color: #000000;
  font-size: 24px;
  background-color: #f9f9f9;
`