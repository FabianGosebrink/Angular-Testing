import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Person = {
  id: string;
  name: string;
};

@Service()
export class PersonService {
  load(id: string): Observable<Person> {
    return of({
      id,
      name: 'Some Name',
    });
  }
}
