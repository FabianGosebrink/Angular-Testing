import { Component } from '@angular/core';
import { HoverHighlightDirective } from './highlight.directive';

@Component({
  template: `<span id="forTesting" appHoverhighlight>anyValue</span>`,
  standalone: true,
  imports: [HoverHighlightDirective],
})
export class DummyComponent {}
