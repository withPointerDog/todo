import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customPatternForEmail(mail: string): ValidatorFn {
  return function checkInEmail(
    control: AbstractControl
  ): { [key: string]: any } | null {
    let arr = control.value.split('@');

    if (arr.includes(mail)) {
      return null;
    }
    return {
      pattern: { valid: false, errMsg: `Доступ только для домена "@${mail}"` },
    };
  };
}
