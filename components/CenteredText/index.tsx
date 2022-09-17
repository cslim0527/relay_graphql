import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const CenteredText = ({ children }: Props) => {
  return <StyledCenteredBlock>{children}</StyledCenteredBlock>;
};

export default CenteredText;

const StyledCenteredBlock = styled.div`
  text-align: center;
`;
