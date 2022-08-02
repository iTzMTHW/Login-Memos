import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  vaiLogin() {
    this.router.navigateByUrl('')
  }

}
