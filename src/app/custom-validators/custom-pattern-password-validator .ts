import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customPatternForPassword(): ValidatorFn {
  return function checkInPassword(
    control: AbstractControl
  ): { [key: string]: any } | null {
    return isNaN(parseInt(control.value))
      ? {
          patternPassword: {
            valid: false,
            errMsg: `Пароль должен содержать цифры`,
          },
        }
      : null;
  };
}
