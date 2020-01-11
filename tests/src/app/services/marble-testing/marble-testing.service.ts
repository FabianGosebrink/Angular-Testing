import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MarbleTestingService {
  private readonly numbers = ['1', '2', '3'];

  constructor() {}

  getValues() {
    return interval(1000).pipe(
      take(this.numbers.length),
      map(i => this.numbers[i])
    );
  }
}
