import { isObservable, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

declare const Zone: any;

async waitFor<T>(prom: Promise<T> | Observable<T>): Promise<T> {
  if (isObservable(prom)) {
    prom = firstValueFrom(prom);
  }
  const macroTask = Zone.current
    .scheduleMacroTask(
      `WAITFOR-${Math.random()}`,
      () => { },
      {},
      () => { }
    );
  return prom.then((p: T) => {
    macroTask.invoke();
    return p;
  });
}