import { AbstractControl } from '@angular/forms';

function checkInteger(value) {
  return parseFloat(value) === parseInt(value, 10) || value === null;
}

export function integerValidator(c: AbstractControl): { [key: string]: boolean } | null {
  return checkInteger(c.value) ? null : { 'notInteger': true }
} 