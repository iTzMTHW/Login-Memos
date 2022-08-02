import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChiamataHttpService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/users"

  getDataUsers() {
    return this.http.get<any>(this.url)
  }

  utente(username : string, password : string, codiceFiscale : string) {
    return this.http.get<any>(this.url + '?username=' + username + '&password=' + password + '&cf=' + codiceFiscale)
  }


}
