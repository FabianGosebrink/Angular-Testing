import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  name$: Observable<string>;

  constructor() {}

  ngOnInit() {
    console.log('AsyncPipeComponent ngOnInit');
  }
}
