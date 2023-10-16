import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-with-output-nested',
  templateUrl: './with-output-nested.component.html',
  styleUrls: ['./with-output-nested.component.css'],
  standalone: true,
})
export class WithOutputNestedComponent implements OnInit {
  @Output() greetFromNested = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  doGreet() {
    this.greetFromNested.emit('Hi from nested');
  }
}
