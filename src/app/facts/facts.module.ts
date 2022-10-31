import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsRoutingModule } from './facts-routing.module';
import { FactsCollectionComponent } from './facts-collection/facts-collection.component';


@NgModule({
  declarations: [
    FactsCollectionComponent
  ],
  imports: [
    CommonModule,
    FactsRoutingModule
  ],
  exports: [FactsCollectionComponent]
})
export class FactsModule { }
