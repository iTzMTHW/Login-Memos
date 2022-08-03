import { Component, OnInit } from '@angular/core';
import { formCreazione } from 'src/app/formCreazione';
import { ChiamataHttpService } from 'src/app/services/chiamata-http.service';

@Component({
  selector: 'app-dialog-creazione',
  templateUrl: './dialog-creazione.component.html',
  styleUrls: ['./dialog-creazione.component.scss']
})
export class DialogCreazioneComponent implements OnInit {

  creazioneMemo : any = formCreazione()
  minDate : Date;
  maxDate : Date;
  constructor(private serv : ChiamataHttpService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 10, 11, 31);
  }

  ngOnInit(): void {
  }

  funzione() {
    console.log(this.creazioneMemo.get('orario').value)

  }

}