import { Router } from '@angular/router';
import { ChiamataHttpService } from './../../services/chiamata-http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreazioneComponent } from '../dialog-creazione/dialog-creazione.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  utenteLoggato : any
  idUtente : any
  memos : any[] = []

  constructor(private serv : ChiamataHttpService, private router : Router, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogCreazioneComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.body}`);
      if (result) {
        let memo = result
        memo.userId = this.idUtente
        this.serv.addMemo(memo).subscribe((d) => {
        this.memos.push(d)
      })
      }
    });
  }

  ngOnInit(): void {
    this.riceviUsername()
    this.stampaMemo()
    console.log("UTENTE LOGGATO: " + this.utenteLoggato.username)
  }

  riceviUsername() {
    this.serv.riceviDato().subscribe((d) =>{
      console.log(d)
      this.utenteLoggato = d
      this.idUtente = d.id
    })
  }

  stampaMemo() {
    this.serv.getMemos(this.idUtente).subscribe((res : any) => {
      this.memos = res
      console.log(res)
    })
  }

  logout() {
    this.utenteLoggato = []
    this.serv.inviaDato(this.utenteLoggato)
    this.router.navigateByUrl('')
    console.log("UTENTE LOGGATO: " + this.utenteLoggato.username)
  }
}
