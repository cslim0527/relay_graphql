import styled from "styled-components";
import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 16px 80px 0;
`;
