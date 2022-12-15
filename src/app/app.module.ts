import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EditAboutmeComponent } from './about-me/edit-aboutme.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarExpComponent } from './experiences/editar-exp.component';
import { AgregarExpComponent } from './experiences/agregar-exp.component';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EditarEducationComponent } from './education/editar-education.component';
import { AgregarEducationComponent } from './education/agregar-education.component';
import { EditarSkillComponent } from './skills/editar-skill.component';
import { AgregarSkillComponent } from './skills/agregar-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    HomePageComponent,
    EditAboutmeComponent,
    EditarExpComponent,
    AgregarExpComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperiencesComponent,
    EditarEducationComponent,
    AgregarEducationComponent,
    EditarSkillComponent,
    AgregarSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }