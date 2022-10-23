import { InputBroadcast, TKeyCode, KEYBOARD_CODE } from "@/broadcasts/input-broadcast";
import { useEffect, useState } from "react";
import { Container, Buttons, Analog } from "./styles";

const input = new InputBroadcast();

const BUTTON_X = KEYBOARD_CODE.ArrowUp;
const BUTTON_A = KEYBOARD_CODE.ArrowRight;
const BUTTON_B = KEYBOARD_CODE.ArrowDown;
const BUTTON_Y = KEYBOARD_CODE.ArrowLeft;

function handleButtonPress(key: TKeyCode) {
  input.dispatch({
    key,
    pressed: true
  });
}

function handleButtonRelease(key: TKeyCode) {
  input.dispatch({
    key,
    pressed: false
  });
}

export function RightController() {
  const [isButtonAPressed, setIsButtonAPressed] = useState(false);
  const [isButtonBPressed, setIsButtonBPressed] = useState(false);
  const [isButtonXPressed, setIsButtonXPressed] = useState(false);
  const [isButtonYPressed, setIsButtonYPressed] = useState(false);

  useEffect(subscribeInput, []);

  function subscribeInput() {
    input.subscribe({
      id: "right-controller",
      onNotify: (data) => {
        if (data.key === BUTTON_A) {
          setIsButtonAPressed(data.pressed);
        }

        if (data.key === BUTTON_B) {
          setIsButtonBPressed(data.pressed);
        }

        if (data.key === BUTTON_X) {
          setIsButtonXPressed(data.pressed);
        }

        if (data.key === BUTTON_Y) {
          setIsButtonYPressed(data.pressed);
        }
      }
    });
  }

  return (
    <Container>
      <Buttons.Container>
        <Buttons.X
          onMouseDown={() => handleButtonPress(BUTTON_X)}
          onMouseUp={() => handleButtonRelease(BUTTON_X)}
          pressed={isButtonXPressed}
        />
        <Buttons.A
          onMouseDown={() => handleButtonPress(BUTTON_A)}
          onMouseUp={() => handleButtonRelease(BUTTON_A)}
          pressed={isButtonAPressed}
        />
        <Buttons.B
          onMouseDown={() => handleButtonPress(BUTTON_B)}
          onMouseUp={() => handleButtonRelease(BUTTON_B)}
          pressed={isButtonBPressed}
        />
        <Buttons.Y
          onMouseDown={() => handleButtonPress(BUTTON_Y)}
          onMouseUp={() => handleButtonRelease(BUTTON_Y)}
          pressed={isButtonYPressed}
        />
      </Buttons.Container>

      <Analog />
    </Container>
  );
}
