import { Component } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [ShellComponent]
})
export class AppComponent {
  title = 'app';
}
