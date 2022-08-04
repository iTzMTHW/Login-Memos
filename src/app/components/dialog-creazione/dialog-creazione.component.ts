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
  minDate : string;


  constructor(private serv : ChiamataHttpService, public dialogRef: MatDialogRef<DialogCreazioneComponent>) {
    this.minDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
  }

  funzione() {
    let memo = this.creazioneMemo.value
    this.dialogRef.close(memo)
  }

}
