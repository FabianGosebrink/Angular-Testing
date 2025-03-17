import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: '<div>{{name}}</div>',
  styleUrls: ['./inline-template.component.css'],
  standalone: true,
})
export class InlineTemplateComponent {
  name = 'Fabian';
}
