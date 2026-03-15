import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  readonly isChildVisible = signal(false);

  onClick(): void {
    this.isChildVisible.update((isVisible) => !isVisible);
  }
}
