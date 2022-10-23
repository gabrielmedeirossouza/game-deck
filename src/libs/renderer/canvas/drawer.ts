export class Drawer {
  public static scalar = 50;

  protected static _ctx: CanvasRenderingContext2D | undefined;

  protected static _canvas: HTMLCanvasElement | undefined;

  public static Init(canvas: HTMLCanvasElement): void {
    Drawer._canvas = canvas;

    Drawer._canvas.width = window.innerWidth;
    Drawer._canvas.height = window.innerHeight;
    Drawer._ctx = Drawer._canvas.getContext("2d", { willReadFrequently: true })!;
    Drawer._ctx.imageSmoothingQuality = "high";
    Drawer._ctx.translate(Drawer._canvas.width / 2, Drawer._canvas.height / 2);

    window.addEventListener("resize", () => {
      if (!Drawer._canvas) return;

      Drawer._canvas.width = window.innerWidth;
      Drawer._canvas.height = window.innerHeight;
      Drawer._ctx?.translate(Drawer._canvas.width / 2, Drawer._canvas.height / 2);
    });
  }
}
