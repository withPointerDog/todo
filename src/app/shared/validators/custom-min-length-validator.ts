import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customMinLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value.length < length
      ? {
          minLength: {
            valid: false,
            errMsg: `Minimum ${length} characters required`,
          },
        }
      : null;
}
