import { Vector2 } from "@/libs/math";
import { Drawer } from "./drawer";

export class Circle extends Drawer {
  public static Draw(origin: Vector2, radius: number, color: string): void {
    if (!Drawer._ctx) return;

    Drawer._ctx.beginPath();
    Drawer._ctx.arc(origin.x, origin.y * -1, radius, 0, 2 * Math.PI);
    Drawer._ctx.strokeStyle = color;
    Drawer._ctx.fillStyle = color;
    Drawer._ctx.fill();
    Drawer._ctx.stroke();
    Drawer._ctx.closePath();
  }
}
