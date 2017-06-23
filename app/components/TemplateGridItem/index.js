import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from 'material-ui/Card';

const ItemContainer = styled(Card)`
  width: 100%;
  & > div {
    padding: 0 !important;
  }
  cursor: pointer;
`;

TemplateGridItem.propTypes = {
  imageUri: React.PropTypes.string.isRequired,
  cardTitle: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

function TemplateGridItem({ imageUri, cardTitle, onClick }) {
  return (
    <ItemContainer onClick={onClick}>
      <img src={imageUri} alt="Template" width="100%" />
      <CardTitle>{ cardTitle }</CardTitle>
    </ItemContainer>
  );
}

export default TemplateGridItem;
