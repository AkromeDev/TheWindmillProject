import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsCollectionComponent } from './facts-collection/facts-collection.component';

const routes: Routes = [
  { path: 'facts', component: FactsCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactsRoutingModule { }
