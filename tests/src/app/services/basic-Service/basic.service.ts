import { Injectable } from '@angular/core';

@Injectable()
export class BasicService {

  constructor() { }

  add(x: number, y: number) {
    return x + y;
  }
}
