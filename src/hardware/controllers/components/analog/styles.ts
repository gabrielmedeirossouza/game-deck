import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  width: 58rem;
  height: 58rem;
  border-radius: 50%;
  background-color: #343434;
  border: 5px solid ${darken(0.05, "#343434")};
  cursor: grab;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid ${lighten(0.05, "#343434")};
  }

  &:active {
    cursor: grabbing;
  }
`;
