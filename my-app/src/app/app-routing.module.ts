import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-basic', component: BasicComponent },
  { path: 'ngr-produit', component: ProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
