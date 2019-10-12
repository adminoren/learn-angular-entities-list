import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface IComponentObject {
  component: any;
  context: any;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSequence$$: Subject<any> = new Subject();

  constructor() { }

  public open(obj): void {
    this.modalSequence$$.next(obj);
  }

  public close(): void {
    this.modalSequence$$.next({});
  }

  public get modalSequence(): Observable<any> {
    return this.modalSequence$$.asObservable();
  }

}
