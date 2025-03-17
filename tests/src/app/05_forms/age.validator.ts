import { AbstractControl } from '@angular/forms';

export class AgeValidator {
  static ageValidator(control: AbstractControl<number>) {
    if (control.value < 0) {
      return { ageNotValid: true };
    }

    if (control.value > 100) {
      return { ageNotValid: true };
    }

    return null;
  }
}
