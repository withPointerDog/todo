import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customMaxLength(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value.length >= length
      ? {
          maxLength: {
            valid: false,
            errMsg: `Длина не должна превышать ${length} символов`,
          },
        }
      : null;
}
