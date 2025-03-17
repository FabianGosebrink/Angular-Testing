import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { delay, distinctUntilChanged, filter, map } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  readonly searchValueControl = new FormControl('');

  readonly searchValueChanged = outputFromObservable(
    this.searchValueControl.valueChanges.pipe(
      distinctUntilChanged(),
      delay(400),
      map((value) => value?.trim()),
      filter(Boolean),
    ),
  );
}
