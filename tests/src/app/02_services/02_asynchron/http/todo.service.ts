import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);

  loadTodos(): Observable<any> {
    return this.http.get('my/fancy/url');
  }
}
