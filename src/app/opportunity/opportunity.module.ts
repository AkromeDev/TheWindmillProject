import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityElementsComponent } from './opportunity-elements/opportunity-elements.component';


@NgModule({
  declarations: [
    OpportunityElementsComponent
  ],
  imports: [
    CommonModule,
    OpportunityRoutingModule
  ]
})
export class OpportunityModule { }
