import { Injectable } from '@angular/core';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Observable, Observer, of, timer } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';
import { AsyncService } from './async.service';

describe('AsyncService', () => {
  describe('AsyncService with real service', () => {
    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [AsyncService],
      });

      service = TestBed.inject(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it(
      'should get the name',
      waitForAsync(() => {
        service.getName().subscribe((name: string) => {
          expect(name).toBe('Fabian');
        });
      })
    );

    it('should get the name (fakeasync)', fakeAsync(() => {
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
      TestBed.configureTestingModule({
        providers: [AsyncService],
      });

      service = TestBed.inject(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it(
      'should get the name',
      waitForAsync(() => {
        const spy = spyOn(service, 'getName').and.returnValue(
          of('SpyFabian').pipe(delay(500))
        );

        service.getName().subscribe((name: string) => {
          expect(name).toBe('SpyFabian');
        });
        expect(spy.calls.any()).toBe(true);
      })
    );
  });

  describe('AsyncService with fake service', () => {
    @Injectable()
    class AsyncServiceMock {
      getName(): Observable<string> {
        return timer(500).pipe(mapTo('FakeFabian'));
      }
    }

    let service: AsyncService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: AsyncService, useClass: AsyncServiceMock }],
      });

      service = TestBed.inject(AsyncService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it(
      'should get the name (async)',
      waitForAsync(() => {
        service.getName().subscribe((name: string) => {
          expect(name).toBe('FakeFabian');
        });
      })
    );

    it('should get the name (fakeasync)', fakeAsync(() => {
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
