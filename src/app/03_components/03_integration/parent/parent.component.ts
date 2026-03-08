import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  readonly showHint = signal(false);

  onButtonClicked(): void {
    this.showHint.update((show) => !show);
  }
}
