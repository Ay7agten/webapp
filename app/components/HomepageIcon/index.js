import React from 'react';
import styled from 'styled-components';
import TacoIcon from '../icons/TacoResume';

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 100%;
`;
const LogoContainer = styled.div`
  margin-bottom: 15px;
`;
const Title = styled.h4`
  font-size: 18px;
  text-align: center;
  margin: 0;
`;

HomepageIcon.propTypes = {
  logo: React.PropTypes.element,
  title: React.PropTypes.string,
  width: React.PropTypes.string,
};

function HomepageIcon({ logo, title, width }) {
  return (
    <ComponentWrapper>
      <LogoContainer style={{ width }}>
        {logo}
      </LogoContainer>
      <Title>
        {title}
      </Title>
    </ComponentWrapper>
  );
}

HomepageIcon.defaultProps = {
  logo: <TacoIcon />,
  title: 'Taco Resume',
  width: '80px',
};

export default HomepageIcon;
