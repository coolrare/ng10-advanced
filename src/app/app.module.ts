import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ColorComponent } from './utilities/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    PathNotFoundComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
