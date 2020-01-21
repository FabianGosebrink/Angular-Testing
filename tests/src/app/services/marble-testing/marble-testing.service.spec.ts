import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { MarbleTestingService } from './marble-testing.service';

export class MarbleTestingServiceMock {
  getValues() {
    return cold('a-b-c', { a: '1', b: '2', c: '3' });
  }
}

describe('CustomHttpService', () => {
  let service: MarbleTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MarbleTestingService, useClass: MarbleTestingServiceMock }
      ]
    });

    // inject the service
    service = TestBed.get(MarbleTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly return mighty users (using jasmine-marbles)', () => {
    // Here we define the Observable we expect to be returned by "getModifiedUsers"
    const expectedObservable = cold('a-b-c', {
      a: '1',
      b: '2',
      c: '3'
    });
    expect(service.getValues()).toBeObservable(expectedObservable);
  });
});
