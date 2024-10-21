import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-with-output',
  templateUrl: './with-output.component.html',
  styleUrls: ['./with-output.component.css'],
  standalone: true,
  imports: [],
})
export class WithOutputComponent {
  @Output() greet = new EventEmitter<string>();

  greet2 = output<string>();

  doGreet() {
    this.greet.emit('Hi');
    this.greet2.emit('Hi2');
  }
}
