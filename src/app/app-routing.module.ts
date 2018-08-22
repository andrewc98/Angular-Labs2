import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'account', component:AccountComponent},
  {path:'display', component:DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
