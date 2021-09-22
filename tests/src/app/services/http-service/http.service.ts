import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class CustomHttpService {
  constructor(private httpClient: HttpClient) {}

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
    return timer(1000).pipe(mapTo(`['en', 'de', 'it']`));
  }
}
