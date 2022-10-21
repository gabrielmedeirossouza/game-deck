import { Container, Buttons, Analog } from "./styles";

export function RightController() {
  return (
    <Container>
      <Buttons.Container>
        <Buttons.X />
        <Buttons.A />
        <Buttons.B />
        <Buttons.Y />
      </Buttons.Container>

      <Analog />
    </Container>
  );
}
