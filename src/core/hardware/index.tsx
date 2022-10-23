import { LeftController, RightController } from "./controllers";
import { Screen } from "./screen";
import { GameDeck } from "./styles";

export function Hardware() {
  return (
    <GameDeck>
      <LeftController />
      <Screen />
      <RightController />
    </GameDeck >
  );
}
