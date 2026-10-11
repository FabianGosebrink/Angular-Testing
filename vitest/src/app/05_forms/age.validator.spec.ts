import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form } from '@angular/forms/signals';
import { validAge } from './age.validator';

describe('validAge', () => {
  const testCases = [
    { input: -1, errors: ['ageNotValid'] },
    { input: 0, errors: [] },
    { input: 50, errors: [] },
    { input: 100, errors: [] },
    { input: 101, errors: ['ageNotValid'] },
  ];

  testCases.forEach(({ input, errors }) => {
    test(`should return ${JSON.stringify(errors)} when age is ${input}`, () => {
      // arrange
      const age = signal(input);

      // act
      // form() needs an injection context, the TestBed provides one
      const ageForm = TestBed.runInInjectionContext(() => form(age, validAge));

      // assert
      expect(
        ageForm()
          .errors()
          .map((error) => error.kind),
      ).toEqual(errors);
    });
  });
});
