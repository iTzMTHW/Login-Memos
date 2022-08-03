import { HomeComponent } from './components/home/home.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: RegistrazioneComponent,
    path: 'registrazione'
  },
  {
    component: HomeComponent,
    path: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
