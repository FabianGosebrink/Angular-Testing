import { Injectable } from '@angular/core';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';

import { AsyncService } from './async.service';

describe('AsyncService', () => {

  describe('AsyncService with real service', () => {
    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AsyncService]
      });

      service = TestBed.get(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get the name', () => {
      service.getNameASync().subscribe((name: string) => {
        expect(name).toBe('Fabian');
      });
    });

    it('should get the name (async)', async(() => {

      service.getNameASync().subscribe((name: string) => {
        expect(name).toBe('Fabian');
      });

    }));

    it('should get the name (fakeasync)', fakeAsync(() => {

      let value;
      service.getNameASync().subscribe((name: string) => {
        value = name;
      });

      expect(value).not.toBeDefined();
      tick(250);
      expect(value).not.toBeDefined();

      tick(250);
      expect(value).toBeDefined();
      expect(value).toBe('Fabian');
    }));
  });

  describe('AsyncService with a spy', () => {
    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AsyncService]
      });

      service = TestBed.get(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get the name', () => {
      const spy = spyOn(service, 'getNameASync').and.returnValue(Observable.of('SpyFabian'));

      service.getNameASync().subscribe((name: string) => {
        expect(name).toBe('SpyFabian');
      });
      expect(spy.calls.any()).toBe(true, 'getNameASync called');
    });

  });

  describe('AsyncService with fake service', () => {

    @Injectable()
    class AsyncFakeService {

      getNameASync(): Observable<string> {

        return Observable.create((observer: Observer<string>) => {
          setTimeout(() => {
            observer.next('FakeFabian');
            observer.complete();
          }, 500);
        });
      }
    }

    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: AsyncService, useClass: AsyncFakeService }]
      });

      service = TestBed.get(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get the name', () => {
      service.getNameASync().subscribe((name: string) => {
        expect(name).toBe('FakeFabian');
      });
    });

    it('should get the name (async)', async(() => {

      service.getNameASync().subscribe((name: string) => {
        expect(name).toBe('FakeFabian');
      });

    }));

    it('should get the name (fakeasync)', fakeAsync(() => {

      let value;
      service.getNameASync().subscribe((name: string) => {
        value = name;
      });

      expect(value).not.toBeDefined();
      tick(250);
      expect(value).not.toBeDefined();

      tick(250);
      expect(value).toBeDefined();
      expect(value).toBe('FakeFabian');
    }));
  });
});
