import styled from "styled-components";
import { IconButton as IconButtonComponent } from "../components/button";
import { Analog as AnalogComponent } from "../components/analog";
import { BiLeftArrow, BiRightArrow, BiUpArrow, BiDownArrow } from "react-icons/bi";

const BUTTON_SIZE = 26;
const BUTTON_REM_HALF_SIZE = BUTTON_SIZE / 2 + "rem";

const ButtonsContainer = styled.div`
  position: relative;
  width: 85rem;
  height: 85rem;
  align-self: flex-end;
  margin-bottom: 54rem;
`;

const Button = styled(IconButtonComponent)`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const ButtonTopAttrs = () => ({
  icon: BiUpArrow
});

const ButtonTop = styled(Button).attrs(ButtonTopAttrs)`
  top: ${BUTTON_REM_HALF_SIZE};
  left: 50%;
`;

const ButtonRightAttrs = () => ({
  icon: BiRightArrow
});

const ButtonRight = styled(Button).attrs(ButtonRightAttrs)`
  top: 50%;
  left: calc(100% - ${BUTTON_REM_HALF_SIZE});
`;

const ButtonDownAttrs = () => ({
  icon: BiDownArrow
});

const ButtonDown = styled(Button).attrs(ButtonDownAttrs)`
  top: calc(100% - ${BUTTON_REM_HALF_SIZE});
  left: 50%;
`;

const ButtonLeftAttrs = () => ({
  icon: BiLeftArrow
});

const ButtonLeft = styled(Button).attrs(ButtonLeftAttrs)`
  top: 50%;
  left: ${BUTTON_REM_HALF_SIZE};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 120rem;
  height: 364rem;
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
  border-top-left-radius: 60rem;
  border-bottom-left-radius: 60rem;
  background-color: #38bdf8;
`;

export const Buttons = {
  Container: ButtonsContainer,
  Top: ButtonTop,
  Right: ButtonRight,
  Down: ButtonDown,
  Left: ButtonLeft
};

export const Analog = styled(AnalogComponent)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
`;
