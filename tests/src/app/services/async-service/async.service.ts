import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class AsyncService {
  constructor() {}

  getNameASync(): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Fabian');
        observer.complete();
      }, 500);
    });
  }
}
