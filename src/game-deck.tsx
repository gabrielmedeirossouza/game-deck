import { Hardware } from "./core/hardware";
import { InputBroadcast, TKeyCode } from "@/broadcasts/input-broadcast";

const input = new InputBroadcast();

input.subscribe({
  id: "document"
});

window.addEventListener("keydown", (e) => {
  if (e.repeat) return;

  input.dispatch({
    key: e.code as TKeyCode,
    pressed: true
  });
});

window.addEventListener("keyup", (e) => {
  input.dispatch({
    key: e.code as TKeyCode,
    pressed: false
  });
});

export function GameDeck() {
  return (
    <Hardware />
  );
}
