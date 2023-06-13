import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModpacksComponent } from './modpacks/modpacks.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', redirectTo:'modpacks', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'modpacks', component: ModpacksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
