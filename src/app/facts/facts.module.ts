import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsRoutingModule } from './facts-routing.module';
import { DividerComponent } from '../standaloneComp/divider/divider.component'
import { TableComponent } from '../standaloneComp/table/table.component';
import { FactsCollectionComponent } from './facts-collection/facts-collection.component';



@NgModule({
  declarations: [
    FactsCollectionComponent
  ],
  imports: [
    CommonModule,
    FactsRoutingModule,
    DividerComponent,
    TableComponent,
  ]
})
export class FactsModule { }
