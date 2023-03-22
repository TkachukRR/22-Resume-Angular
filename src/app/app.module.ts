import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndroduceComponent } from './components/introduce/introduce.component';
import { LangButtonsComponent } from './components/langButtons/LangButtons.component';
import { FormsModule } from '@angular/forms';
import { ProjectsGalleryComponent } from './components/projectsGallery/projectsGallery.component';
import { EducationListComponent } from './components/educationList/educationList.component';
import { WorkListComponent } from './components/workList/workList.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { LocationComponent } from './components/location/location.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CvPageComponent } from './components/cv-page/cv-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndroduceComponent,
    LangButtonsComponent,
    ProjectsGalleryComponent,
    EducationListComponent,
    WorkListComponent,
    BirthdayComponent,
    LocationComponent,
    ContactsComponent,
    SkillsComponent,
    HobbiesComponent,
    CvPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, AngularSvgIconModule.forRoot() ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
