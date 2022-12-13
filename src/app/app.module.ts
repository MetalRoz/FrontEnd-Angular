import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header.component/header.component.component';
import { AboutMeComponentComponent } from './about-me.component/about-me.component.component';
import { ExperiencesComponentComponent } from './experiences.component/experiences.component.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { EditAboutmeComponent } from './about-me.component/edit-aboutme.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarExpComponent } from './experiences.component/editar-exp.component';
import { AgregarExpComponent } from './experiences.component/agregar-exp.component';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AboutMeComponentComponent,
    ExperiencesComponentComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    HomePageComponent,
    EditAboutmeComponent,
    EditarExpComponent,
    AgregarExpComponent,
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