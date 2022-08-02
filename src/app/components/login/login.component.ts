import { ChiamataHttpService } from './../../services/chiamata-http.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { myForm } from 'src/app/form';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true
  users : any[] = []

  loginUtente : any = myForm()

  constructor(private serv : ChiamataHttpService) { }

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
    this.serv.utente(this.loginUtente.get('username')?.value!, this.loginUtente.get('password')?.value!, this.loginUtente.get('codiceFiscale')?.value!)
    .subscribe((res: any) => {
      this.users = res
      // console.log(res);
      console.log(this.users);

      if (res.length > 0)
        console.log("Login effettuato")

    });
  }

  // var results = [];
  // var searchField = "name";
  // var searchVal = "my Name";
  // for (var i=0 ; i < obj.list.length ; i++)
  // {
  //     if (obj.list[i][searchField] == searchVal) {
  //         results.push(obj.list[i]);
  //     }
  // }



}

  //Validators custom
  function controlloCF(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valueCF = control.value

      if (valueCF.length == 16)
        return null
      else
        return { valueNotCorrect: true }
    }
  }

  function controlloPass() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valuePass = control.value
      let isPresente = false

      if (valuePass.length >= 8) {
        for (let item = 0 ; item < valuePass.length ; item++) {
          if (valuePass[item] == '!' || valuePass[item] == '@') {
            isPresente = true
            break;
          } else
            isPresente = false
        }
      }

      if(isPresente)
        return null
      else
        return { formatoErrato : true}
    }
  }
