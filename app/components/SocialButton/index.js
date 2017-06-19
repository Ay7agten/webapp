import React from 'react';
import styled from 'styled-components';

const SocialButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 50px;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled.div`
  width: 30px;
`;

const Title = styled.div`
  flex-grow: 1;
  line-height: 200%;
  text-align: center;
  vertical-align: middle;
`;

SocialButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  logo: React.PropTypes.element.isRequired,
  title: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string,
};

function SocialButton({ onClick, logo, title, backgroundColor, color }) {
  return (
    <SocialButtonContainer
      onClick={onClick}
      style={{
        backgroundColor,
        color,
      }}
    >
      <Logo>
        {logo}
      </Logo>
      <Title>
        {title}
      </Title>
    </SocialButtonContainer>
  );
}

SocialButton.defaultProps = {
  title: 'Sign in with Socialmedia',
  backgroundColor: '#369',
  color: '#FFF',

};

export default SocialButton;
