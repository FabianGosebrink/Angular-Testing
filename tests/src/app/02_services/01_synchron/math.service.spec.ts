import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should add two numbers', () => {
      // arrange
      const first = 5;
      const second = 11;
      const expected = 16;

      // act
      const result = service.add(first, second);

      // assert
      expect(result).toBe(expected);
    });
  });

  describe('add', () => {
    [
      {
        first: 1,
        second: 2,
        expected: 3,
      },
      {
        first: 3,
        second: 4,
        expected: 7,
      },
      {
        first: 23,
        second: 11,
        expected: 34,
      },
    ].forEach(({ first, second, expected }) => {
      it(`should return ${expected} when adding ${first} and ${second}`, () => {
        // act
        const result = service.add(first, second);

        // assert
        expect(result).toBe(expected);
      });
    });
  });

  describe('add with snapshots', () => {
    [
      {
        first: 1,
        second: 2,
      },
      {
        first: 3,
        second: 4,
      },
      {
        first: 23,
        second: 11,
      },
    ].forEach(({ first, second }) => {
      it(`should add ${first} and ${second}`, () => {
        // act
        const result = service.add(first, second);

        // assert
        expect(result).toMatchSnapshot();
      });
    });
  });
});
