import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    /* email reg ex can be found here -> https://github.com/Budibase/budibase/discussions/3117 */
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$|^$|^ $/;
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail: true };
  }
}
