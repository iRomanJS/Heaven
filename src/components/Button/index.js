import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 6px 1em;
  font-size: ${({ size }) => size ? size + "px" : "18px"};
  font-weight: 600;
  border-radius: 10px;
  background-color: rgba(255, 0, 42, 0.7);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: rgba(255, 0, 69, 1);
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size}>{props.children}</ButtonWrapper>
  );
}