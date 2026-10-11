import { Component, signal } from '@angular/core';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import { debounce, form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-search',
  imports: [FormField],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  readonly searchValue = signal('');

  readonly searchForm = form(this.searchValue, (path) => debounce(path, 400));

  readonly searchValueChanged = outputFromObservable(toObservable(this.searchValue));
}
