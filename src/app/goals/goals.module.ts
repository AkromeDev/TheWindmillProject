import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsDescriptionComponent } from './goals-description/goals-description.component';
// import { PlaceholderComponent } from '../components/placeholder/placeholder.component';


@NgModule({
  declarations: [
    GoalsDescriptionComponent,
    // PlaceholderComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule,
  ]
})
export class GoalsModule { }
