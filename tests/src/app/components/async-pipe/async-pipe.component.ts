import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css'],
})
export class AsyncPipeComponent implements OnInit {
  name$: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.name$ = of('Fabian').pipe(delay(200));
  }
}
