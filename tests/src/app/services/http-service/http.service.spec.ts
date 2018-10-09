import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { CustomHttpService } from './http.service';

describe('CustomHttpService', () => {
  let service: CustomHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomHttpService],
    });

    // inject the service
    service = TestBed.get(CustomHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the correct star wars character', () => {
    service.getSingle(1).subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });

    const req = httpMock.expectOne(
      `http://replace.with.api/anything/1`,
      'call to api'
    );
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Luke Skywalker',
    });

    httpMock.verify();
  });

  it('should post the correct data', () => {
    service.post<any>({ firstname: 'firstname' }).subscribe((data: any) => {
      expect(data.firstname).toBe('firstname');
    });

    const req = httpMock.expectOne(
      `http://replace.with.api/anything`,
      'post to api'
    );
    expect(req.request.method).toBe('POST');

    req.flush({
      firstname: 'firstname',
    });

    httpMock.verify();
  });

  it('should put the correct data', () => {
    service.put<any>(3, { firstname: 'firstname' }).subscribe((data: any) => {
      expect(data.firstname).toBe('firstname');
    });

    const req = httpMock.expectOne(
      `http://replace.with.api/anything/3`,
      'put to api'
    );
    expect(req.request.method).toBe('PUT');

    req.flush({
      firstname: 'firstname',
    });

    httpMock.verify();
  });

  it('should delete the correct data', () => {
    service.delete(3).subscribe((data: any) => {
      expect(data).toBe(3);
    });

    const req = httpMock.expectOne(
      `http://replace.with.api/anything/3`,
      'delete to api'
    );
    expect(req.request.method).toBe('DELETE');

    req.flush(3);

    httpMock.verify();
  });

  it('should return available languages', async(() => {
    service.getlanguages().subscribe(x => {
      expect(x).toContain('en');
      expect(x).toContain('de');
      expect(x).toContain('it');
      expect(x).toBeDefined();
    });
  }));
});
