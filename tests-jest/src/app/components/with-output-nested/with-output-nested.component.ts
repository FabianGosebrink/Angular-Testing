import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-with-output-nested',
  templateUrl: './with-output-nested.component.html',
  styleUrls: ['./with-output-nested.component.css'],
  standalone: true,
})
export class WithOutputNestedComponent {
  @Output() greetFromNested = new EventEmitter<string>();

  doGreet() {
    this.greetFromNested.emit('Hi from nested');
  }
}
