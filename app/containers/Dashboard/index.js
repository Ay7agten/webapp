/*
 * Dashboard
 *
 * This is the first thing logged users see of our App, at the '/Dashboard' route
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
import resumeImage from '../../static/resumeTemplate.png';

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
`;

const PageTitle = styled.h4 `
  font-size: 18px;
  font-weight: 300;
`;

const GridCardContainer = styled(Card)`
  margin: 0 20px 20px;
  padding: 20px 20px 0;
`;

export default class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {

  }


  testItems = [
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no:{ clicked'); },
      cardTitle: 'Template blue',
    },
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no: 2 clicked'); },
      cardTitle: 'Template blue',
    },
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no: 3 clicked'); },
      cardTitle: 'Template blue',
    },
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no: 4 clicked'); },
      cardTitle: 'Template Red',
    },
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no: 5 clicked'); },
      cardTitle: 'Template green',
    },
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no: 6 clicked'); },
      cardTitle: 'Template blue',
    },
    {
      imageUri: resumeImage,
      onClick: () => { alert('Template no: 7 clicked'); },
      cardTitle: 'Template blue',
    },
  ]

  render() {
    return (
      <DashboardContainer>
        <Header />
        <PageContainer>
          <PageTitle>Choose a template</PageTitle>
          <GridCardContainer>
            <TemplateGrid items={this.testItems} />
          </GridCardContainer>
        </PageContainer>
      </DashboardContainer>
    );
  }
}
