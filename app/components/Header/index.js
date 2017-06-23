import React from 'react';
import styled from 'styled-components';
import TacoResumeLogo from '../icons/TacoResume';
import LogoutLogo from '../icons/Logout';

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #FFF;
  border-bottom: 1px solid #EEE;
  padding: 20px;
  @media (min-width: 1200px) {
    padding: 20px calc((100vw - 1160px)/2)
  }
  & >   * {
    font-size: 20px;
    font-weight: 300;
    flex-basis: 25%;
    text-align: center;
  }
`;

const BrandName = styled.h3`
  flex-basis: 50%;
  line-height: 200%;
  vertical-align: middle;
`;

const LeftIconContainer = styled.div`
  display: flex;
`;

const RightIconContainer = styled.div`
  display: flex;
  flexDirection: row-reverse;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 55px;
`;

const LogoutIconContainer = styled.div`
  align-self: center
  width: 25px;
`;

function onLogoutClick() {
  localStorage.removeItem('Authorization');
  location.reload();
}

function Header() {
  let logoutIconStyle;
  if (!localStorage.getItem('Authorization')) {
    logoutIconStyle = {
      display: 'none',
    };
  }

  return (
    <HeaderContainer>
      <LeftIconContainer>
        <LogoContainer>
          <TacoResumeLogo />
        </LogoContainer>
      </LeftIconContainer>
      <BrandName>
        Taco Resume
      </BrandName>
      <RightIconContainer>
        <LogoutIconContainer style={logoutIconStyle}>
          <LogoutLogo onClick={onLogoutClick} />
        </LogoutIconContainer>
      </RightIconContainer>
    </HeaderContainer>
  );
}

export default Header;
