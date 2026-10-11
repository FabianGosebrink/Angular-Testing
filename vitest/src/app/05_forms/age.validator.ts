import { SchemaPath, validate } from '@angular/forms/signals';

const MIN_AGE = 0;
const MAX_AGE = 100;

export function validAge(path: SchemaPath<number>): void {
  validate(path, ({ value }) => {
    if (isValidAge(value())) {
      return null;
    }

    return { kind: 'ageNotValid', message: `Age must be between ${MIN_AGE} and ${MAX_AGE}` };
  });
}

function isValidAge(age: number): boolean {
  return age >= MIN_AGE && age <= MAX_AGE;
}
