import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header.component/header.component.component';
import { AboutMeComponentComponent } from './about-me.component/about-me.component.component';
import { ExperiencesComponentComponent } from './experiences.component/experiences.component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AboutMeComponentComponent,
    ExperiencesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
