import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";



@Directive({
    selector: '[CheckboxValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CheckboxValidator),
            multi: true,
        },
    ],
})

export class CheckboxValidator implements Validator{
    validate(control: AbstractControl): ValidationErrors | null {
        return control.value ? null : {CheckboxValidator: true};
    }
}