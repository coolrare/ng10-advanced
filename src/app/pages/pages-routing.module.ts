import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'blank', component: BlankComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
