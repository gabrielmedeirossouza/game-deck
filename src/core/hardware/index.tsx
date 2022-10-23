import { Test } from "@/core/software/test";
import { LeftController, RightController } from "./controllers";
import { Screen } from "./screen";
import { GameDeck } from "./styles";

const test = new Test();

test.Start();

export function Hardware() {
  return (
    <GameDeck>
      <LeftController />
      <Screen />
      <RightController />
    </GameDeck >
  );
}
