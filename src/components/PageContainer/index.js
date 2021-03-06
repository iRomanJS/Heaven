import React, { useEffect } from "react";
import styled from "styled-components";

const PageWrapper = styled.div `
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function PageContainer(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageWrapper>{props.children}</PageWrapper>;
}

export const innerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 70vh;
  display: flex;
  flex-direction: colum;
  align-items: center;
`;
