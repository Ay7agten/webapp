/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import Card from 'material-ui/Card';
import Header from '../../components/Header';
import Facebook from '../../components/icons/Facebook';
import Google from '../../components/icons/Google';
import Linkedin from '../../components/icons/Linkedin';
import SocialButton from '../../components/SocialButton';
import HomepageIcon from '../../components/HomepageIcon';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAFA;
  min-height: 100vh;
  & > * {
    font-family: Lato
  }
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const LeftMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  padding-right: 50px;
`;

const LeftMetaTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 10px;
`;

const LeftMetaDescription = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 30px;
`;

const HomepageIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialCard = styled(Card)`
  flex-basis: 35%;
  padding: 20px;
`;

const SocialCardTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 20px;
`;

const SocialButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <HomePageContainer>
        <Header />
        <BodyContainer>
          <LeftMetaContainer>
            <LeftMetaTitle>
              Lorem Ipsum Fash5!
            </LeftMetaTitle>
            <LeftMetaDescription>
              pellentesque et metus quis, imperdiet dignissim dolor. Mauris dapibus libero nibh, ac bibendum urna interdum ac. pellentesque et metus quis, imperdiet dignissim dolor.
            </LeftMetaDescription>
            <HomepageIconsContainer>
              <HomepageIcon />
              <HomepageIcon />
              <HomepageIcon />
              <HomepageIcon />
            </HomepageIconsContainer>
          </LeftMetaContainer>
          <SocialCard>
            <SocialCardTitle>
              Sign in now to make your resume in minutes! for free. maybe some lorem Ipsum.
            </SocialCardTitle>
            <SocialButtonContainer>
              <SocialButton
                onClick={() => { window.location = 'http://tacoresume.herokuapp.com/api/facebook/login'; }}
                logo={<Facebook />}
                title="Sign in with Facebook"
                backgroundColor="#3B5998"
              />
              <SocialButton
                onClick={() => { window.location = 'http://tacoresume.herokuapp.com/api/google/login'; }}
                logo={<Google />}
                title="Sign in with Google"
                backgroundColor="#DF4930"
              />
              <SocialButton
                onClick={() => { window.location = 'http://tacoresume.herokuapp.com/api/linkedin/login'; }}
                logo={<Linkedin />}
                title="Sign in with Linkedin"
                backgroundColor="#0077B5"
              />
            </SocialButtonContainer>
          </SocialCard>
        </BodyContainer>
      </HomePageContainer>
    );
  }
}
