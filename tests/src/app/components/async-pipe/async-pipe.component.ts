import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  name$: Observable<string>;

  constructor() { }

  ngOnInit() {
    console.log(' AsyncPipeComponent ngOnInit');
  }
}
