import { TInputData, IInputBroadcast } from "./@types";
export { KEYBOARD_CODE } from "./@types";
export type { TKeyCode } from "./@types";

export class InputBroadcast {
  private static _observers: IInputBroadcast[] = [];

  public subscribe(observer: IInputBroadcast) {
    InputBroadcast._observers.push(observer);
  }

  public unsubscribe(id: string) {
    InputBroadcast._observers = InputBroadcast._observers.filter((obs) => obs.id !== id);
  }

  public dispatch(data: TInputData) {
    this.notify(data);
  }

  private notify(data: TInputData) {
    InputBroadcast._observers.forEach((observer) => {
      observer.onNotify?.(data);
    });
  }
}
