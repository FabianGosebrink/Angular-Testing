import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  readonly buttonClicked = output();

  onClick(): void {
    this.buttonClicked.emit();
  }
}
