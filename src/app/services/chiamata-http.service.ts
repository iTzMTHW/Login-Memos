import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChiamataHttpService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/users"
  urlMemo = "http://localhost:3000/memo"

  private subject = new BehaviorSubject<any>([])

  inviaDato(utente : any) {
    this.subject.next(utente)
  }

  riceviDato():Observable<any> {
    return this.subject.asObservable()
  }


  getDataUsers() {
    return this.http.get<any>(this.url)
  }

  utente(username : string, password : string, codiceFiscale : string) {
    return this.http.get<any>(this.url + '?username=' + username + '&password=' + password + '&cf=' + codiceFiscale)
  }

  addUser(data : any): Observable<any> {
    return this.http.post<any>(this.url, data)
  }

  getMemos(idUtente : number) {
    return this.http.get<any>(this.urlMemo + '?userId=' + idUtente)
  }

  addMemo(memo : any) {
    return this.http.post<any>(this.urlMemo, memo)
  }


}
