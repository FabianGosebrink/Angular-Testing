import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomHttpService {
  private readonly httpClient = inject(HttpClient);

  getSingle<T>(id: number) {
    return this.httpClient.get<T>(`http://replace.with.api/anything/${id}`);
  }

  post<T>(item: any) {
    return this.httpClient.post<T>(`http://replace.with.api/anything`, item);
  }

  put<T>(id: number, item: any) {
    return this.httpClient.put<T>(
      `http://replace.with.api/anything/${id}`,
      item
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://replace.with.api/anything/${id}`);
  }

  getLanguages() {
    return timer(1000).pipe(map(() => ['en', 'de', 'it']));
  }
}
