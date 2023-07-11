import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: '<div>{{name}}</div>',
  styleUrls: ['./inline-template.component.css'],
})
export class InlineTemplateComponent implements OnInit {
  name: string;

  ngOnInit() {
    this.name = 'Fabian';
  }
}
