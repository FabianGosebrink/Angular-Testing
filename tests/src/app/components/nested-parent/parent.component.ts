import { Component, signal } from '@angular/core';
import { ChildComponent } from '../nested-child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  isChildVisible = signal(false);

  toggleChildVisibility(): void {
    this.isChildVisible.update((value) => !value);
  }
}
