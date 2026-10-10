import { CapitalizePipe } from './capitalize.pipe';

// A pure pipe has no dependencies, so it does not need the TestBed.
describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
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

  test('should return empty string when value is empty', () => {
    // arrange
    const value = '';

    // act
    const result = pipe.transform(value);

    // assert
    expect(result).toBe('');
  });
});
