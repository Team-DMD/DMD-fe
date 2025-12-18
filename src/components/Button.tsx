import styled from "@emotion/styled"

interface IButtonType {
  children: string,
  onClick?: () => void
}

export const Button = ({children, onClick} : IButtonType) => {
  return (
    <ButtonContent onClick={onClick}>{children}</ButtonContent>
  )
}

const ButtonContent = styled.button `
  padding:  8px 40px;
  border-radius: 8px;
  border:4px dashed #ffffff;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #000000;
  cursor: pointer;
`