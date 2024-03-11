import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BasicService {
  add(x: number, y: number) {
    return x + y;
  }
}
