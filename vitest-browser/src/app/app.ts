import { Component, signal } from '@angular/core';
import { TimeTracker } from './features/time-tracker/time-tracker';

@Component({
  selector: 'app-root',
  imports: [TimeTracker],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('vitest-browser');
}
