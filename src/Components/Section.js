import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import PropTypes from "prop-types";

//:not(:last-child) : 마지막 child를 제외한 모든 하위 element에게 적용되는 css
const Container = styled.div`
  :not(:last-child) { 
    margin-bottom: 50px;
  }
`;
const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Grid = styled.div`
  margin-top: 25px;
  display:grid;
  grid-template-columns:repeat(auto-fill,125px);
  grid-gap:25px;
`;

// children : 예약된 react props
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
  /*children을 넣은 이유 : 우리의 section에서 div 내부에 원하는 children을 넣어야 하기 때문임. */
);

Section.protoTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
