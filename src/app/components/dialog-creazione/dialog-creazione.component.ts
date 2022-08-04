import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { formCreazione } from 'src/app/formCreazione';
import { ChiamataHttpService } from 'src/app/services/chiamata-http.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-creazione',
  templateUrl: './dialog-creazione.component.html',
  styleUrls: ['./dialog-creazione.component.scss']
})
export class DialogCreazioneComponent implements OnInit {

  creazioneMemo : FormGroup = formCreazione()
  minDate : Date;
  maxDate : Date;

  constructor(private serv : ChiamataHttpService, public dialogRef: MatDialogRef<DialogCreazioneComponent>) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(): void {
  }

  funzione() {
    let memo = this.creazioneMemo.value
    this.dialogRef.close(memo)
  }

}
