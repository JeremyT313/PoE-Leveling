import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Act1Component } from './act1/act1.component';
import { Act2Component } from './act2/act2.component';
import { Act3Component } from './act3/act3.component';
import { Act4Component } from './act4/act4.component';
import { Act5Component } from './act5/act5.component';
import { Act6Component } from './act6/act6.component';
import { Act7Component } from './act7/act7.component';
import { Act8Component } from './act8/act8.component';
import { Act9Component } from './act9/act9.component';
import { Act10Component } from './act10/act10.component';
import { EpilogueComponent } from './epilogue/epilogue.component';

const appRoutes: Routes = [
  { path: 'act1', component: Act1Component },
  { path: 'act2', component: Act2Component },
  { path: 'act3', component: Act3Component },
  { path: 'act4', component: Act4Component },
  { path: 'act5', component: Act5Component },
  { path: 'act6', component: Act6Component },
  { path: 'act7', component: Act7Component },
  { path: 'act8', component: Act8Component },
  { path: 'act9', component: Act9Component },
  { path: 'act10', component: Act10Component },
  { path: 'epilogue', component: EpilogueComponent },
  { path: '', redirectTo: '/act1', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    Act1Component,
    Act2Component,
    Act3Component,
    Act4Component,
    Act5Component,
    Act6Component,
    Act7Component,
    Act8Component,
    Act9Component,
    Act10Component,
    EpilogueComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
