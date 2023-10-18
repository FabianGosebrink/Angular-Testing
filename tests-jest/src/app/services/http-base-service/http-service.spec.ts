import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('post', () => {
    it('should post to the correct url', waitForAsync(() => {
      service.post<any>('some-url', { any: 'thing' }).subscribe((data) => {
        expect(data).toEqual({ any: 'thing' });
        expect(req.request.method).toBe('POST');
        expect(req.request.headers.keys().length).toBe(0);
      });

      const req = httpMock.expectOne('some-url', 'POST to api');

      req.flush({ any: 'thing' });

      httpMock.verify();
    }));
  });

  describe('put', () => {
    it('should put to the correct url', waitForAsync(() => {
      service.put<any>('some-url', { any: 'thing' }).subscribe((data) => {
        expect(data).toEqual({ any: 'thing' });
        expect(req.request.method).toBe('PUT');
        expect(req.request.headers.keys().length).toBe(0);
      });

      const req = httpMock.expectOne('some-url', 'PUT to api');

      req.flush({ any: 'thing' });

      httpMock.verify();
    }));
  });

  describe('patch', () => {
    it('should patch to the correct url', waitForAsync(() => {
      service.patch<any>('some-url', { any: 'thing' }).subscribe((data) => {
        expect(data).toEqual({ any: 'thing' });
        expect(req.request.method).toBe('PATCH');
        expect(req.request.headers.keys().length).toBe(1);
      });

      const req = httpMock.expectOne('some-url', 'PATCH to api');

      req.flush({ any: 'thing' });

      httpMock.verify();
    }));
  });

  describe('delete', () => {
    it('should delete to the correct url', waitForAsync(() => {
      service.delete<any>('some-url').subscribe(() => {
        expect(req.request.method).toBe('DELETE');
        expect(req.request.headers.keys().length).toBe(0);
      });

      const req = httpMock.expectOne('some-url', 'DELETE to api');

      req.flush(null);

      httpMock.verify();
    }));
  });

  describe('get', () => {
    it("has not headers if url is not 'apiIntegration'", waitForAsync(() => {
      const url = `any-other-url`;

      const bodyData = { firstName: 'firstName' };

      service.get<any>(url).subscribe((data: any) => {
        expect(data.firstName).toBe('firstName');
      });

      const req = httpMock.expectOne(url, 'get from api');

      expect(req.request.method).toBe('GET');
      expect(req.request.headers.keys().length).toBe(0);

      req.flush(bodyData);

      httpMock.verify();
    }));
  });
});
