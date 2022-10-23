import { GlobalStyle } from "@/global-style";
import ReactDOM from "react-dom/client";
import { GameDeck } from "./game-deck";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <>
    <GlobalStyle />
    <GameDeck />
  </>
);
