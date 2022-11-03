import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsRoutingModule } from './facts-routing.module';
import { DividerComponent } from '../standaloneComp/divider/divider.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FactsRoutingModule,
    DividerComponent
  ],
})
export class FactsModule { }
