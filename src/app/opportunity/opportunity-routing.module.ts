import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityElementsComponent } from './opportunity-elements/opportunity-elements.component';

const routes: Routes = [
  { path: '', component: OpportunityElementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule { }
