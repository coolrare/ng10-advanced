import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blank2RoutingModule } from './blank2-routing.module';
import { Blank2Component } from './blank2.component';


@NgModule({
  declarations: [Blank2Component],
  imports: [
    CommonModule,
    Blank2RoutingModule
  ]
})
export class Blank2Module { }
