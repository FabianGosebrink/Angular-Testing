import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
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
    service = TestBed.inject(CustomHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test(
    'should get the correct star wars character',
    waitForAsync(() => {
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
    })
  );

  test('should post the correct data', () => {
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

  test('should put the correct data', () => {
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

  test('should delete the correct data', () => {
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

  test(
    'should return available languages',
    waitForAsync(() => {
      service.getLanguages().subscribe((x) => {
        expect(x).toContain('en');
        expect(x).toContain('de');
        expect(x).toContain('it');
        expect(x).toBeDefined();
      });
    })
  );
});
