import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    TableComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    TableComponent
  ]
})
export class AtomicComponentsModule { }
