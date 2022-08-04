import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ChiamataHttpService } from './services/chiamata-http.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {

  constructor(private serv: ChiamataHttpService, private router:Router){}

  canActivate(){
    if (this.serv.riceviAccesso().value)
      return true
    else
      return this.router.navigateByUrl('')
  }
}
