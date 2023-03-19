import { Injectable } from '@angular/core';
import { Observable, Observer, timer } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Injectable()
export class AsyncService {
  constructor() {}

  getName(): Observable<string> {
    return timer(2000).pipe(map(() => 'Fabian'));
  }
}
