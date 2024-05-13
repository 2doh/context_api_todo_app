import styled from "@emotion/styled";
import React from "react";

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LabelStyle = styled.h1`
  margin-top: 0;
`;

const Title = ({ label }) => {
  return (
    <ContainerStyle>
      <LabelStyle>{label}</LabelStyle>
    </ContainerStyle>
  );
};

export default Title;
