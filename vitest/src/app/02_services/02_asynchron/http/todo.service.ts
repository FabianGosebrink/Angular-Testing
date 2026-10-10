import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Todo = {
  id: string;
  value: string;
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly #http = inject(HttpClient);

  loadTodos(): Observable<Todo[]> {
    return this.#http.get<Todo[]>('my/fancy/url');
  }
}
