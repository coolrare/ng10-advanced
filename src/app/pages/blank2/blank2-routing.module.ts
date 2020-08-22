import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blank2Component } from './blank2.component';

const routes: Routes = [{ path: '', component: Blank2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blank2RoutingModule { }
