import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customMinLength(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value.length >= length
      ? null
      : {
          minLength: {
            valid: false,
            errMsg: `Длина должна быть ${length} и более символов`,
          },
        };
}
