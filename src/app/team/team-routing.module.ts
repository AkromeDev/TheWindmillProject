import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDescriptionComponent } from './team-description/team-description.component';

const routes: Routes = [
  { path: 'team', component: TeamDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
