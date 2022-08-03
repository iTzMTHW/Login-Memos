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

  constructor(private serv : ChiamataHttpService, private router : Router) { }

  ngOnInit(): void {
    // this.showGetCall()
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
      // console.log(res);
      console.log(this.users);
      console.log(res.length)

      if (res.length > 0)
        console.log("Login effettuato")

    });
  }

  vaiRegistrazione() {
    this.router.navigateByUrl('registrazione')
  }

}
