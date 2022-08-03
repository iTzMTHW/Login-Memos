import { ChiamataHttpService } from './../../services/chiamata-http.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { myForm } from 'src/app/form';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  hide = true
  loginUtente : any = myForm()
  users : any[] = []

  constructor(private router : Router, private serv : ChiamataHttpService) { }

  ngOnInit(): void {
  }

  vaiLogin() {
    this.router.navigateByUrl('')
  }

  effettuaRegistrazione() {
    this.serv.utente(this.loginUtente.get('username')?.value!, this.loginUtente.get('password')?.value!, this.loginUtente.get('cf')?.value!)
    .subscribe((res: any) => {
      this.users = res
      // console.log(res);
      console.log(this.users);

      if (res.length == 0) {
        this.serv.addUser(this.loginUtente.value).subscribe((result: any)=>{
          console.log(result)
        })
        console.log("Registrazione effettuata")
      } else
        alert("Utente già registrato")

    });
  }
}
