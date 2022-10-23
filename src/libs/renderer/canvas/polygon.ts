import { Vector2 } from "@/libs/math";
import { Drawer } from "./drawer";

export class Polygon extends Drawer {
  public static Draw(origin: Vector2, vertices: Vector2[], color: string): void {
    if (!Drawer._ctx) return;

    Drawer._ctx.beginPath();
    Drawer._ctx.strokeStyle = color;
    Drawer._ctx.fillStyle = color;
    Drawer._ctx.lineWidth = 2;
    Drawer._ctx.moveTo(origin.x, origin.y * -1);

    for (let index = 0; index <= vertices.length; index++) {
      const vertex = vertices[index] ?? vertices[0];

      Drawer._ctx.lineTo(vertex.x + origin.x, (vertex.y + origin.y) * -1);
    }

    Drawer._ctx.stroke();
    Drawer._ctx.closePath();
  }
}
