import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets/img";

const Header = () => {
  return (
    <HeaderContainer>
      <Left>
        <LogoBackground>
          <LogoImg src={Logo} alt="로고" />
          <LogoName>NOTICE BOARD</LogoName>
        </LogoBackground>
        <Item>메인</Item>
        <Item>게시판</Item>
        <Item>주간 베스트</Item>
      </Left>
      <Right>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <LoginBtn>로그인</LoginBtn>
        </Link>
        <SignUpBtn>회원가입</SignUpBtn>
        <Writing>글쓰기</Writing>
      </Right>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
  width: 470px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBackground = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 25px;
  height: 25px;
`;

const LogoName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 8px;
`;

const Item = styled.p`
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #2e64fe;
  }
`;

const Right = styled.div`
  width: 195px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginBtn = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: black;
  cursor: pointer;
  :hover {
    color: #a4a4a4;
  }
`;

const SignUpBtn = styled.p`
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: #a4a4a4;
  }
`;

const Writing = styled.button`
  border: 0;
  width: 70px;
  height: 30px;
  font-weight: bold;
  font-size: 13px;
  border-radius: 15px;
  color: white;
  background-color: #0040ff;
  cursor: pointer;
  transition: all 0.8s;
  :hover {
    color: white;
    background-color: #0080ff;
  }
`;

export default Header;
