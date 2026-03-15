import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appHoverhighlight]',
  host: {
    '[style.background-color]': 'backgroundColor()',
    '(mouseover)': 'onHover()',
    '(mouseout)': 'onLeave()',
  },
})
export class HoverHighlightDirective {
  readonly backgroundColor = signal<'inherit' | 'blue'>('inherit');

  onHover() {
    this.backgroundColor.set('blue');
  }

  onLeave() {
    this.backgroundColor.set('inherit');
  }
}
