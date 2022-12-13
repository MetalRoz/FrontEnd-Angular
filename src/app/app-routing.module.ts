import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './about-me.component/edit-aboutme.component';
import { AgregarExpComponent } from './experiences.component/agregar-exp.component';
import { EditarExpComponent } from './experiences.component/editar-exp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path:'edit-aboutme/:id', component: EditAboutmeComponent },
  { path:'agregar-exp', component: AgregarExpComponent },
  { path:'editar-exp/:id', component: EditarExpComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }