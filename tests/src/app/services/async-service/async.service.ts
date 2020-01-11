import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AsyncService {
  constructor() {}

  getNameASync(): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Fabian');
        observer.complete();
      }, 2000);
    });
  }
}
