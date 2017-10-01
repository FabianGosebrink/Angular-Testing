import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomHttpService {

  constructor(private httpClient: HttpClient) { }

  getSinglePerson(id: number) {
    return this.httpClient.get(`https://swapi.co/api/people/${id}`);
  }
}
