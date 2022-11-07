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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AboutMeComponentComponent,
    ExperiencesComponentComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
