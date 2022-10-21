import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 624rem;
  height: 358rem;
  background-color: #1f2937;
  margin-block: auto;
`;

export const Frame = styled.div`
  display: grid;
  place-items: center;
  width: 580rem;
  height: 332rem;
  background-color: #0f172a;
  border-radius: 8rem;
`;

export const Display = styled.div`
  width: 500rem;
  aspect-ratio: 16 / 9;
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
`;
