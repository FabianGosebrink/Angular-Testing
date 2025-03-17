import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  info(value: string): void {
    console.info(value);
  }
}
