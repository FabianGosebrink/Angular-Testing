import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-with-input',
  templateUrl: './with-input.component.html',
  styleUrls: ['./with-input.component.css']
})
export class WithInputComponent implements OnChanges {
  @Input() name: string;

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Not implemented yet.');
  }
}
