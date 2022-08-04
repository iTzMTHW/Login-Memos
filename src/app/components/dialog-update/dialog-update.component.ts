import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formUpdate } from 'src/app/formUpdate';
import { Memo } from 'src/app/services/chiamata-http.service';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.scss']
})
export class DialogUpdateComponent implements OnInit {

  updateMemo : FormGroup = formUpdate()
  minDate : string;

  constructor(public dialogRef: MatDialogRef<DialogUpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: Memo) {
    this.minDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.updateMemo.patchValue({
      body : this.data.body,
      orario : this.data.orario,
      data : this.data.data
    })

  }
  funzione() {
    let memo = this.updateMemo.value
    this.dialogRef.close(memo)
  }

}
