import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsDescriptionComponent } from './goals-description/goals-description.component';


@NgModule({
  declarations: [
    GoalsDescriptionComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  exports: [GoalsDescriptionComponent]
})
export class GoalsModule { }
