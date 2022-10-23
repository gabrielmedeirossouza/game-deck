import { Vector2 } from "@/libs/math";
import { Drawer } from "./drawer";

export class Line extends Drawer {
  public static Draw(origin: Vector2, line: Vector2, color: string): void {
    if (!Drawer._ctx) return;

    Drawer._ctx.beginPath();
    Drawer._ctx.moveTo(origin.x, origin.y * -1);
    Drawer._ctx.lineTo(origin.x + line.x, origin.y + line.y * -1);
    Drawer._ctx.strokeStyle = color;
    Drawer._ctx.stroke();
    Drawer._ctx.closePath();
  }
}
