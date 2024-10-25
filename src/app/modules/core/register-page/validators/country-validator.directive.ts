import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive ({
    selector: '[CountryValidator]',
    providers: [
        {
         provide: NG_VALIDATORS,
         useExisting: forwardRef(() => CountryValidator),
         multi: true
        },
    ],
})
export class CountryValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const isValid = control.value === 'CA';
        return isValid ? null : {countryInvalid: true};
    }
}