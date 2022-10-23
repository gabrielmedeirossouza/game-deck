import { Container, Frame, Display, Canvas } from "./styles";

export function Screen() {
  return (
    <Container>
      <Frame>
        <Display>
          <Canvas />
        </Display>
      </Frame>
    </Container>
  );
}
