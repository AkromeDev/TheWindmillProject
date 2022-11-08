import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsRoutingModule } from './facts-routing.module';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { SecondTabComponent } from './second-tab/second-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent
  ],
  imports: [
    CommonModule,
    FactsRoutingModule,
    AppRoutingModule,
  ],
})
export class FactsModule { }
