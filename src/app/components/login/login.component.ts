import { ChiamataHttpService } from './../../services/chiamata-http.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { myForm } from 'src/app/form';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true
  users : any[] = []

  loginUtente : any = myForm()
  utenteLoggato : any
  isLoggato = false

  constructor(private serv : ChiamataHttpService, private router : Router) { }

  ngOnInit(): void {
    console.log("UTENTE LOGGATO ADESSO: " + this.utenteLoggato);

  }

  //Funzione per prendere i dati dalla richeista Http
  showGetCall() {
    this.serv.getDataUsers()
      .subscribe((res: any) => {
        this.users = res
        // console.log(res);
        console.log(this.users);

      });
  }

  datiUsername() {
    this.serv.utente(this.loginUtente.get('username')?.value!, this.loginUtente.get('password')?.value!, this.loginUtente.get('cf')?.value!)
    .subscribe((res: any) => {
      this.users = res
      // console.log(this.users);
      // console.log(res.length)

      if (res.length > 0) {
        console.log("Login effettuato")
        this.isLoggato = true
        this.serv.inviaAccesso(this.isLoggato)
        this.router.navigateByUrl('home')
        this.utenteLoggato = res[0]
        this.serv.inviaDato(this.utenteLoggato)


      } else
        alert("Utente non registrato")


    });
  }

  vaiRegistrazione() {
    this.router.navigateByUrl('registrazione')
  }

}
