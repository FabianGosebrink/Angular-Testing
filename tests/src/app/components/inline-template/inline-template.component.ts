import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: '<div><div>{{name}}</div></div>',
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit() {
    this.name = 'Fabian';
  }

}
