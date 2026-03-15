import { CapitalizePipe } from './capitalize.pipe';
import { TestBed } from '@angular/core/testing';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapitalizePipe],
    });

    pipe = TestBed.inject(CapitalizePipe);
  });

  test('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  test('should return capitalized string', () => {
    // arrange
    const value = 'angular';

    // act
    const result = pipe.transform(value);

    // assert
    expect(result).toBe('Angular');
  });
});
