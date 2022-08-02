import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function myForm() {
  return new FormBuilder().group({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, controlloPass()]),
    codiceFiscale: new FormControl('', [Validators.required, controlloCF()])
  });
}

function controlloCF(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valueCF = control.value

    if (valueCF.length == 16)
      return null
    else
      return { valueNotCorrect: true }
  }
}

function controlloPass() : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valuePass = control.value
    let isPresente = false

    if (valuePass.length >= 8) {
      for (let item = 0 ; item < valuePass.length ; item++) {
        if (valuePass[item] == '!' || valuePass[item] == '@') {
          isPresente = true
          break;
        } else
          isPresente = false
      }
    }

    if(isPresente)
      return null
    else
      return { formatoErrato : true}
  }
}
