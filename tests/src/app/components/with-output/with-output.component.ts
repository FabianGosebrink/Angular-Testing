import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-with-output',
  templateUrl: './with-output.component.html',
  styleUrls: ['./with-output.component.css']
})

export class WithOutputComponent implements OnInit {

  @Output() greet = new EventEmitter<string>();

  doGreet() {
    this.greet.emit('Hi');
  }
  constructor() { }

  ngOnInit() {
  }

}
