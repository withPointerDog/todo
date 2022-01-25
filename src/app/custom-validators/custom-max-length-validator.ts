import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customMaxLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value.length > length
      ? {
          maxLength: {
            valid: false,
            errMsg: `Maximum ${length} characters required`,
          },
        }
      : null;
}
