import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-time-tracker',
  imports: [MatButton],
  templateUrl: './time-tracker.html',
  styleUrl: './time-tracker.scss',
})
export class TimeTracker {
  readonly isTracking = signal(false);

  startTracking(): void {
    this.isTracking.set(true);
  }

  stopTracking(): void {
    this.isTracking.set(false);
  }
}
