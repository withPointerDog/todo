import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customPatternValidatorForEmail(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(control.value)
      ? null
      : {
          pattern: {
            valid: false,
            errMsg: 'The email incorrect, try it again',
          },
        };
}
