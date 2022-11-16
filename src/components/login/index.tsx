import styled from "styled-components";
import axios from "axios";
import { useState, useCallback } from "react";
import { Logo } from "assets/img";
import { Link } from "react-router-dom";
import useInput from "hooks/useInput";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const [mismatchError, setMismatchError] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);

  const onSubmit = useCallback(
    (e: React.ChangeEvent) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log("서버로 회원가입하기");
        setSignUpError("");
        setSignUpSuccess(false);
        axios

          .post("/api/users", {
            email,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [email, password]
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
            <LabelText>비밀번호</LabelText>
            <PasswordInput type="password" />
          </Label>
          <Button>로그인</Button>
          <Link to="/signup">
            <SignUpBtn>회원가입</SignUpBtn>
          </Link>
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
  height: 400px;
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
  margin-bottom: 15px;
`;

const LabelText = styled.label`
  font-weight: bold;
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
  margin-bottom: 25px;
`;

const Button = styled.button`
  width: 350px;
  height: 53px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 5px;
`;

const SignUpBtn = styled.p`
  color: black;
  margin-top: 30px;
  font-size: 15px;
`;

export default Login;
