import { GlobalStyle } from "@/global-style";
import ReactDOM from "react-dom/client";
import { Hardware } from "@/hardware";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <>
    <GlobalStyle />
    <Hardware />
  </>
);
