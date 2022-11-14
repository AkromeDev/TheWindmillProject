import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { StatisticComponent } from '../standaloneComp/statistic/statistic.component';
import { DividerComponent } from '../standaloneComp/divider/divider.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    StatisticComponent,
    DividerComponent,
  ]
})
export class GoalsModule { }
