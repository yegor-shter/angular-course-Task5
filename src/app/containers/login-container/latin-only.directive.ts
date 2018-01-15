import { Directive, forwardRef, } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appLatinOnly]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => LatinOnlyDirective), multi: true}
  ]
})
export class LatinOnlyDirective implements Validator{

  validate(control: AbstractControl) {
    console.log('latin validator was called');
    let errors= {
      latinOnlyErr: {
        valid: false
      }
    };

    let pattern = /^[A-z0-9\@\%\\\/\!\#\$\^\?\:\.\(\)\{\}\[\]\~\-\_]+$/;
    return pattern.test(control.value) ? null : errors;
  }


  constructor() { }

}
