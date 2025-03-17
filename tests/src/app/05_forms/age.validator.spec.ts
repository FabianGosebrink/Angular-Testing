import { FormControl } from '@angular/forms';
import { AgeValidator } from './age.validator';

describe('AgeValidator', () => {
  describe('ageValidator', () => {
    const testCases = [
      { input: -1, result: { ageNotValid: true } },
      { input: 101, result: { ageNotValid: true } },
      { input: 50, result: null },
    ];

    testCases.forEach(({ input, result }) => {
      it(`should return ${JSON.stringify(result)} when age is ${input}`, () => {
        const validatorFn = AgeValidator.ageValidator;

        const res = validatorFn(
          new FormControl<number>(input, { nonNullable: true }),
        );

        expect(res).toEqual(result);
      });
    });
  });
});
