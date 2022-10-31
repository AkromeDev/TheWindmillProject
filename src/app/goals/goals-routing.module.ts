import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsDescriptionComponent } from './goals-description/goals-description.component';

const routes: Routes = [
  { path: 'goals', component: GoalsDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
