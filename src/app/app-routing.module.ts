import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './about-me.component/edit-aboutme.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path:'edit-aboutme/:id', component: EditAboutmeComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }