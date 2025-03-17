import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const firstLetter = value.charAt(0);
    const rest = value.slice(1);
    const capitalizedFirstLetter = firstLetter.toUpperCase();

    return `${capitalizedFirstLetter}${rest}`;
  }
}
