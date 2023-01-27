import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndroduceComponent } from './components/introduce/introduce.component';
import { LangButtonsComponent } from './components/langButtons/LangButtons.component';
import { FormsModule } from '@angular/forms';
import { ProjectsGalleryComponent } from './components/projectsGallery/projectsGallery.component';

@NgModule({
  declarations: [
    AppComponent,
    IndroduceComponent,
    LangButtonsComponent,
    ProjectsGalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
