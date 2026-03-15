import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Person = {
  id: string;
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  load(id: string): Observable<Person> {
    return of({
      id,
      name: 'Some Name',
    });
  }
}
