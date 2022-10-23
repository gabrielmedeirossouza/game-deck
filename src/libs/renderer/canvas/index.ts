import { Vector2 } from "@/libs/math";

import { Drawer } from "./drawer";
import { Line } from "./line";
import { Clear } from "./clear";
import { Polygon } from "./polygon";
import { Circle } from "./circle";

const COLORS_TYPE = {
  black: "#1A202C",
  red: "#E53E3E",
  blue: "#2B6CB0",
  purple: "#B83280",
  white: "#FFFFFF",
};

export class Canvas {
  public static Init(canvas: HTMLCanvasElement): void {
    Drawer.Init(canvas);
  }

  public static Clear(): void {
    Clear.Draw();
  }

  public static Circle(origin: Vector2, radius:  number): void {
    Circle.Draw(origin, radius, COLORS_TYPE.white);
  }

  public static Line(origin: Vector2, line: Vector2): void {
    Line.Draw(origin, line, COLORS_TYPE.white);
  }

  public static Polygon(origin: Vector2, vertices: Vector2[]): void {
    Polygon.Draw(origin, vertices, COLORS_TYPE.white);
  }
}
