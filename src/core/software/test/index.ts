import { GameBehavior } from "@/libs/game";
import { Canvas } from "@/libs/renderer";
import { Vector2 } from "@/libs/math";
import { Particle, Force } from "@/libs/physics";
import { InputBroadcast, TKeyCode } from "@/broadcasts/input-broadcast";

export class Test extends GameBehavior {
  private _canvas: HTMLCanvasElement | null = null;
  private _pressedKeys: TKeyCode[] = [];

  private _particle: Particle;

  constructor() {
    super();

    this._particle = new Particle(
      new Vector2(0, 0),
      10
    );

    const input = new InputBroadcast();
    input.subscribe({
      id: "test",
      onNotify: (inputEvent) => {
        if (inputEvent.pressed) {
          this._pressedKeys.push(inputEvent.key);

          return;
        }

        this._pressedKeys = this._pressedKeys.filter((key) => key !== inputEvent.key);
      }
    });
  }

  public BeforeUpdate(): void {
    if (!this._canvas) {
      const canvas = document.querySelector("canvas");

      if (!canvas) return;

      Canvas.Init(canvas);
      this._canvas = canvas;
    }

    Canvas.Clear();
  }

  public Update(): void {
    const direction = new Vector2(
      this._pressedKeys.includes("KeyD") ? 1 : this._pressedKeys.includes("KeyA") ? -1 : 0,
      this._pressedKeys.includes("KeyW") ? 1 : this._pressedKeys.includes("KeyS") ? -1 : 0
    );
    const movement = Force.GenerateImpulseForce(direction, 10000);
    this._particle.AddForce(movement);

    const friction = Force.GenerateFrictionForce(this._particle, 1500);
    this._particle.AddForce(friction);

    console.log(this._particle.velocity);
  }

  public AfterUpdate(): void {
    this._particle.Integrate(this._deltaTime);

    Canvas.Circle(
      this._particle.position,
      50
    );
  }
}
