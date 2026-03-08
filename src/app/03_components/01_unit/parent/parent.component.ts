import { Component, output } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  readonly buttonClicked = output();

  onClick(): void {
    this.buttonClicked.emit();
  }
}
