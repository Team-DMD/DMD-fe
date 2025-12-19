import styled from "@emotion/styled";
import { Flex } from "flex-yeo";

interface IInputsType {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  label?: string;
}

export const Inputs = ({
  value,
  onChange,
  placeholder,
  label,
}: IInputsType) => {
  return (
    <Flex isColumn gap={8}>
      <Label>{label}</Label>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Flex>
  );
};

const Label = styled.div`
  font-size: 16px;
  color: white;
`;
const Input = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  border: dashed 3px #333333;
  padding: 8px 12px;
  color: #000000;
  font-size: 24px;
  background-color: #f9f9f9;
`;
