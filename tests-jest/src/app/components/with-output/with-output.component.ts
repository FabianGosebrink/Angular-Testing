import { Component, EventEmitter, Output } from '@angular/core';
import { WithOutputNestedComponent } from '../with-output-nested/with-output-nested.component';

@Component({
  selector: 'app-with-output',
  templateUrl: './with-output.component.html',
  styleUrls: ['./with-output.component.css'],
  standalone: true,
  imports: [WithOutputNestedComponent],
})
export class WithOutputComponent {
  @Output() greet = new EventEmitter<string>();

  doGreet() {
    this.greet.emit('Hi');
  }

  greetFromNested(event) {
    console.log(event);
  }
}
