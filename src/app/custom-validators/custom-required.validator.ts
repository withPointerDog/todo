import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customRequiredValidator(): ValidatorFn {
  // (Реализую интерфейс функции, которая возвращает функцию с ошибокой или null)
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value === ''
      ? { required: { valid: false, errMsg: 'The field must not be empty' } }
      : null;
}
