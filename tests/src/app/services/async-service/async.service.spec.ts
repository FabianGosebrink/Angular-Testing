import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {

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

  it('should get the name', async(() => {

    service.getNameASync().subscribe((name: string) => {
      expect(name).toBe('Fabian');
    });

  }));

  it('should get the name fakeasync', fakeAsync(() => {

    let value;
    service.getNameASync().subscribe((name: string) => {
      value = name;
    });

    expect(value).not.toBeDefined();
    tick(250);
    expect(value).not.toBeDefined();

    tick(250);
    expect(value).toBeDefined();
  }));
});
