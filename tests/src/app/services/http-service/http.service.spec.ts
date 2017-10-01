import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpService } from './http.service';

describe('CustomHttpService', () => {

  let service: CustomHttpService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomHttpService]
    });

    // inject the service
    service = TestBed.get(CustomHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the json', () => {
    service.getSinglePerson(1).subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });

    const req = httpMock.expectOne(`https://swapi.co/api/people/1`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Luke Skywalker'
    });

    httpMock.verify();
  });
});
