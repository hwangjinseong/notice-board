import styled from "styled-components";
import { useState, useCallback } from 'react';
import useInput from "hooks/useInput";
import { Logo } from "assets/img";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useInput('');
  const [nickname, setNickname] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );
  return (
    <LoginContainer>
      <LoginBackground>
        <InnerBox>
          <Topic to="/" style={{ textDecoration: "none" }}>
            <img src={Logo} alt="로고" />
            <LogoName>NOTICE BOARD</LogoName>
          </Topic>
          <Label>
            <LabelText>이메일</LabelText>
            <EmailInput />
          </Label>
          <Label>
            <LabelText>이름</LabelText>
            <EmailInput />
          </Label>
          <Label>
            <LabelText>비밀번호</LabelText>
            <PasswordInput type="password" />
          </Label>
          <Label>
            <LabelText>비밀번호 확인</LabelText>
            <PasswordInput type="password" />
          </Label>
          <Button>회원가입</Button>
        </InnerBox>
      </LoginBackground>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBackground = styled.div`
  width: 700px;
  height: 800px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBox = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Topic = styled(Link)`
  display: flex;
  color: black;
  margin-bottom: 50px;
`;

const LogoName = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const LabelText = styled.label`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
`;

const EmailInput = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
`;

const PasswordInput = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
`;

const Button = styled.button`
  width: 350px;
  height: 53px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
  color: white;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
`;

export default SignUp;
