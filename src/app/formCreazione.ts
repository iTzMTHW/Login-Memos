import { FormBuilder, FormControl, Validators } from "@angular/forms";

export function formCreazione() {
  return new FormBuilder().group({
    data: new FormControl('', Validators.required),
    orario: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
}
