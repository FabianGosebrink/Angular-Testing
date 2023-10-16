import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AsyncService {
  getName(): Observable<string> {
    return timer(2000).pipe(map(() => 'Fabian'));
  }
}
