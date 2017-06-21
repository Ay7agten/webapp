import React from 'react';
import styled from 'styled-components';
import { Card } from 'material-ui/Card';
import TemplateGridItem from '../TemplateGridItem';

const xasdf = `300px`;

const TemplateGridContainer = styled.div`
	display: flex;
  flex-wrap: wrap;
  width: 100%;
  & > div {
    color: red;
    width: ${(props) => props.width};
    margin-right: 20px;
  }
`

function TemplateGrid({ width, ...props }) {
  return (
    <TemplateGridContainer width={width}>
      <TemplateGridItem width={width}/>
      <TemplateGridItem width={width}/>
      <TemplateGridItem width={width}/>
      <TemplateGridItem width={width}/>
      <TemplateGridItem width={width}/>
    </TemplateGridContainer>
  );
}

export default TemplateGrid;
