import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class AsyncPipeComponent {
  name$ = of('Fabian').pipe(delay(200));
}
