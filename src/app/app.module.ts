import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', component: },
  { path: '', redirectTo: '', pathMatch: ''}
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoputes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
