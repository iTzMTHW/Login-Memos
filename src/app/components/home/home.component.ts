import { Router } from '@angular/router';
import { ChiamataHttpService } from './../../services/chiamata-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  utenteLoggato : number = 0
  memos : any[] = []

  constructor(private serv : ChiamataHttpService, private router : Router) { }

  ngOnInit(): void {
    this.riceviUsername()
    this.stampaMemo()
    console.log("ID UTENTE LOGGATO: " + this.utenteLoggato)
  }

  riceviUsername() {
    this.serv.riceviDato().subscribe((d) =>{
      console.log(d)
      this.utenteLoggato = d
    })
  }

  stampaMemo() {
    this.serv.getMemos(this.utenteLoggato).subscribe((res : any) => {
      this.memos = res
      console.log(res)
    })
  }

  logout() {
    this.utenteLoggato = 0
    this.serv.inviaDato(this.utenteLoggato)
    this.router.navigateByUrl('')
    console.log("ID UTENTE LOGGATO: " + this.utenteLoggato)
  }
}
