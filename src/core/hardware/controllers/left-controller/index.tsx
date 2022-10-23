import { InputBroadcast, KEYBOARD_CODE, TKeyCode } from "@/broadcasts/input-broadcast";
import { useEffect, useState } from "react";
import { Container, Buttons, Analog } from "./styles";

const input = new InputBroadcast();

const BUTTON_W = KEYBOARD_CODE.KeyW;
const BUTTON_D = KEYBOARD_CODE.KeyD;
const BUTTON_S = KEYBOARD_CODE.KeyS;
const BUTTON_A = KEYBOARD_CODE.KeyA;

function handleButtonPress(key: TKeyCode) {
  console.log(key);
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

export function LeftController() {
  const [isButtonWPressed, setIsButtonWPressed] = useState(false);
  const [isButtonDPressed, setIsButtonDPressed] = useState(false);
  const [isButtonSPressed, setIsButtonSPressed] = useState(false);
  const [isButtonAPressed, setIsButtonAPressed] = useState(false);

  useEffect(subscribeInput, []);

  function subscribeInput() {
    input.subscribe({
      id: "left-controller",
      onNotify: (data) => {
        if (data.key === BUTTON_W) {
          setIsButtonWPressed(data.pressed);
        }

        if (data.key === BUTTON_D) {
          setIsButtonDPressed(data.pressed);
        }

        if (data.key === BUTTON_S) {
          setIsButtonSPressed(data.pressed);
        }

        if (data.key === BUTTON_A) {
          setIsButtonAPressed(data.pressed);
        }
      }
    });
  }

  return (
    <Container>
      <Analog />

      <Buttons.Container>
        <Buttons.Top
          onMouseDown={() => handleButtonPress(BUTTON_W)}
          onMouseUp={() => handleButtonRelease(BUTTON_W)}
          pressed={isButtonWPressed}
        />
        <Buttons.Right
          onMouseDown={() => handleButtonPress(BUTTON_D)}
          onMouseUp={() => handleButtonRelease(BUTTON_D)}
          pressed={isButtonDPressed}
        />
        <Buttons.Down
          onMouseDown={() => handleButtonPress(BUTTON_S)}
          onMouseUp={() => handleButtonRelease(BUTTON_S)}
          pressed={isButtonSPressed}
        />
        <Buttons.Left
          onMouseDown={() => handleButtonPress(BUTTON_A)}
          onMouseUp={() => handleButtonRelease(BUTTON_A)}
          pressed={isButtonAPressed}
        />
      </Buttons.Container>
    </Container>
  );
}
