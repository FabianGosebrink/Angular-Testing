import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverhighlight]',
})
export class HoverHighlightDirective {
  @HostBinding('style.background-color') backgroundColor = '';

  @HostListener('mouseover')
  onHover() {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseout')
  onLeave() {
    this.backgroundColor = 'inherit';
  }
}
