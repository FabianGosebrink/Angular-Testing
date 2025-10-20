import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: '<div>{{name}}</div>',
  styleUrls: ['./inline-template.component.scss'],
})
export class InlineTemplateComponent {
  name = 'Fabian';
}
