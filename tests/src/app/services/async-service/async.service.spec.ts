import { Injectable } from '@angular/core';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Observable, of, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AsyncService } from './async.service';

describe('AsyncService', () => {
  describe('AsyncService with real service', () => {
    let service: AsyncService;

    beforeEach(() => {
      service = TestBed.inject(AsyncService);
    });

    test('should be created', () => {
      expect(service).toBeTruthy();
    });

    test('should get the name', waitForAsync(() => {
      service.getName().subscribe((name: string) => {
        expect(name).toBe('Fabian');
      });
    }));

    test('should get the name (fakeasync)', fakeAsync(() => {
      let value;
      service.getName().subscribe((name: string) => {
        value = name;
      });

      expect(value).not.toBeDefined();
      tick(500);
      expect(value).not.toBeDefined();

      tick(1500);
      expect(value).toBeDefined();
      expect(value).toBe('Fabian');
    }));
  });

  describe('AsyncService with a spy', () => {
    let service: AsyncService;

    beforeEach(() => {
      service = TestBed.inject(AsyncService);
    });

    test('should be created', () => {
      expect(service).toBeTruthy();
    });

    test('should get the name', waitForAsync(() => {
      const spy = jest
        .spyOn(service, 'getName')
        .mockReturnValue(of('SpyFabian').pipe(delay(500)));

      service.getName().subscribe((name: string) => {
        expect(name).toBe('SpyFabian');
      });
      expect(spy.mock.calls.length).toBe(1);
    }));
  });

  describe('AsyncService with fake service', () => {
    @Injectable()
    class AsyncServiceMock {
      getName(): Observable<string> {
        return timer(500).pipe(map(() => 'FakeFabian'));
      }
    }

    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: AsyncService, useClass: AsyncServiceMock }],
      });

      service = TestBed.inject(AsyncService);
    });

    test('should be created', () => {
      expect(service).toBeTruthy();
    });

    test('should get the name (async)', waitForAsync(() => {
      service.getName().subscribe((name: string) => {
        expect(name).toBe('FakeFabian');
      });
    }));

    test('should get the name (fakeAsync)', fakeAsync(() => {
      let value;
      service.getName().subscribe((name: string) => {
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
