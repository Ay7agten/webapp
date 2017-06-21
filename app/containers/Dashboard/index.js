/*
 * Dashboard
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
import TemplateGrid from '../../components/TemplateGrid';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAFA;
  min-height: 100vh;

  & > * {
    font-family: Lato
  }
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageTitle = styled.h4 `
  font-size: 18px;
  font-weight: 300;
  margin: 20px 0;
`

const GridCardContainer = styled(Card)`
  padding: 20px;
`

export default class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {

  }

  render() {
    return (
      <DashboardContainer>
        <Header />
        <PageContainer>
          <PageTitle>Choose a template</PageTitle>
          <GridCardContainer>
            <TemplateGrid width='calc(20% - 20px)'/>
          </GridCardContainer>
        </PageContainer>
      </DashboardContainer>
    );
  }
}
