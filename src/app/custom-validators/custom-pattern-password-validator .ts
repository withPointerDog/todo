import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customPatternValidatorForPassword(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm.test(control.value)
      ? null
      : {
          pattern: {
            valid: false,
            errMsg:
              'The password must be at least one uppercase letter, one lowercase letter and one number',
          },
        };
}
