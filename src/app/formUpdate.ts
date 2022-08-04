import { FormBuilder, FormControl, Validators } from "@angular/forms";

export function formUpdate() {
  return new FormBuilder().group({
    data: new FormControl(''),
    orario: new FormControl(''),
    body: new FormControl('',Validators.minLength(10))
  });
}
