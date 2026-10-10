import { Service } from '@angular/core';

@Service()
export class LoggerService {
  info(value: string): void {
    console.info(value);
  }
}
