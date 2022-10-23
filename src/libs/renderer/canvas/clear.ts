import { Drawer } from "./drawer";

export class Clear extends Drawer {
  public static Draw(): void {
    if (!Drawer._ctx || !Drawer._canvas) return;

    Drawer._ctx.clearRect(
      -Drawer._canvas.width,
      -Drawer._canvas.height,
      Drawer._canvas.width * 2,
      Drawer._canvas.height * 2
    );
  }
}
