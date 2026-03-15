import { Component } from '@angular/core';
import { HoverHighlightDirective } from './highlight.directive';

@Component({
  template: `<span id="forTesting" appHoverhighlight>anyValue</span>`,
  imports: [HoverHighlightDirective],
})
export class DummyComponent {}
