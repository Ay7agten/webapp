import React from 'react';
import styled from 'styled-components';
import TemplateGridItem from '../TemplateGridItem';

const TemplateGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  & > div {
    color: red;
    width: ${(props) => props.width};
    width: calc(20% - (20px * 4 / 5)) ;
    margin: 0 20px 20px 0;
  }
  & > div:nth-child(5n) {
    margin-right: 0px;
  }
`;

TemplateGrid.propTypes = {
  items: React.PropTypes.array.isRequired,
};

function getGridItem(items) {
  const gridItems = [];
  for (let i = 0; i < items.length; i += 1) {
    gridItems.push(<TemplateGridItem
      key={i}
      imageUri={items[i].imageUri}
      onClick={items[i].onClick}
      cardTitle={items[i].cardTitle}
    />);
  }
  return gridItems;
}

function TemplateGrid({ items }) {
  return (
    <TemplateGridContainer >
      {getGridItem(items)}
    </TemplateGridContainer>
  );
}

export default TemplateGrid;
