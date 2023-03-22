import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { CvPageComponent } from "./components/cv-page/cv-page.component";

const routes: Routes = [
  {path: '', component: CvPageComponent},
  {path: ':lang', component: CvPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
