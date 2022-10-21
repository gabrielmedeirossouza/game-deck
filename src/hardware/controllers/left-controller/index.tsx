import { Container, Buttons, Analog } from "./styles";

export function LeftController() {
  return (
    <Container>
      <Analog />

      <Buttons.Container>
        <Buttons.Top />
        <Buttons.Right />
        <Buttons.Down />
        <Buttons.Left />
      </Buttons.Container>
    </Container>
  );
}
