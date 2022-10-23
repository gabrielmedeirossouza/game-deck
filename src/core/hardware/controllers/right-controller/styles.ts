import styled from "styled-components";
import { Button as ButtonComponent } from "../components/button";
import { Analog as AnalogComponent } from "../components/analog";

const BUTTON_SIZE = 26;
const BUTTON_REM_HALF_SIZE = BUTTON_SIZE / 2 + "rem";

const ButtonsContainer = styled.div`
  position: relative;
  width: 85rem;
  height: 85rem;
  margin-top: 54rem;
  align-self: flex-start;
`;

const Button = styled(ButtonComponent)`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const ButtonXAttrs = () => ({
  label: "X"
});

const ButtonX = styled(Button).attrs(ButtonXAttrs)`
  top: ${BUTTON_REM_HALF_SIZE};
  left: 50%;
`;

const ButtonAAttrs = () => ({
  label: "A"
});

const ButtonA = styled(Button).attrs(ButtonAAttrs)`
  top: 50%;
  left: calc(100% - ${BUTTON_REM_HALF_SIZE});
`;

const ButtonBAttrs = () => ({
  label: "B"
});

const ButtonB = styled(Button).attrs(ButtonBAttrs)`
  top: calc(100% - ${BUTTON_REM_HALF_SIZE});
  left: 50%;
`;

const ButtonYAttrs = () => ({
  label: "Y"
});

const ButtonY = styled(Button).attrs(ButtonYAttrs)`
  top: 50%;
  left: ${BUTTON_REM_HALF_SIZE};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 120rem;
  height: 364rem;
  border-top-right-radius: 60rem;
  border-bottom-right-radius: 60rem;
  border-top-left-radius: 4rem;
  border-bottom-left-radius: 4rem;
  background-color: #f87171;
`;

export const Buttons = {
  Container: ButtonsContainer,
  X: ButtonX,
  A: ButtonA,
  B: ButtonB,
  Y: ButtonY,
};

export const Analog = styled(AnalogComponent)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
`;
