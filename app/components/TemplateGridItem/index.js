import React from 'react';
import styled from 'styled-components';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const ItemContainer = styled(Card)`
  width: 100%;
  & > div {
    padding: 0 !important; 
  }
`

const CardImageContainer = styled(CardMedia)`
`
const imageUri = "https://upload.wikimedia.org/wikipedia/en/3/38/Avatarjakeneytiri.jpg";

function TemplateGridItem() {
  return (
    <ItemContainer>
      <CardImageContainer />
        <img src={imageUri} width='100%'/>
      <CardTitle>asdasdasdsd</CardTitle>
    </ItemContainer>
  );
}

export default TemplateGridItem;
