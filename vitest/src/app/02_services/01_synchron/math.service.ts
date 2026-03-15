import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  add(x: number, y: number) {
    return x + y;
  }
}
