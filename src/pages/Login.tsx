import styled from "@emotion/styled";
import { BACKGROUNDMAIN, LOGO } from "../assets";
import { Button } from "../components";
import { Inputs } from "../components";
import { Flex } from "flex-yeo";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Background>
      <ContentWrapper>
        <Flex isColumn gap={40} alignItems="center">
          <Logo src={LOGO} alt="logo" width="200px" height="200px" />
          <Inputs label="아이디" />
          <Inputs label="비밀번호" />
          <SignupLink to={"/signup"} color="white">
            계정이 없다면? 회원가입
          </SignupLink>
          <Button>로그인</Button>
        </Flex>
      </ContentWrapper>
      <BackgroundImg src={BACKGROUNDMAIN} alt="backgroundImg" />
    </Background>
  );
};

const ContentWrapper = styled.div`
  z-index: 1;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  z-index: 0;
`;

const Background = styled.div`
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 400px;
`;

const SignupLink = styled(Link)`
  color: white;
`;
