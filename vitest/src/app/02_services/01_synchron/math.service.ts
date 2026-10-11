import { Service } from '@angular/core';

@Service()
export class MathService {
  add(x: number, y: number) {
    return x + y;
  }
}
