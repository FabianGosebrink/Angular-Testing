import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-input',
  templateUrl: './with-input.component.html',
  styleUrls: ['./with-input.component.css'],
  standalone: true,
})
export class WithInputComponent {
  @Input() name: string;
}
