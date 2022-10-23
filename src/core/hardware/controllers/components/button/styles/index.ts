import styled from "styled-components";

interface ButtonProps {
  pressed?: boolean;
}

export const Container = styled.button<ButtonProps>`
  all: unset;
  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  background-color: #343434;
  color: #fff;
  font-size: 16rem;
  text-align: center;
  cursor: pointer;

  filter: ${({ pressed }) => pressed && "brightness(0.6)"};
`;
