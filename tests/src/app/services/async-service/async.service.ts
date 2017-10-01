import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';

@Injectable()
export class AsyncService {

  constructor() { }

  getNameASync(): Observable<string> {

    return Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Fabian');
        observer.complete();
      }, 500);
    });
  }
}
