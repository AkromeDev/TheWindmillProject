import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'facts', 
    loadChildren: () => import('./facts/facts-routing.module')
    .then(m => m.FactsRoutingModule)
  },
  {
    path: 'goals', 
    loadChildren: () => import('./goals/goals-routing.module')
    .then(m => m.GoalsRoutingModule)
  },
  {
    path: 'opportunity',
    loadChildren: () => import('./opportunity/opportunity-routing.module')
    .then(m => m.OpportunityRoutingModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./support/support-routing.module')
    .then(m => m.SupportRoutingModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team-routing.module')
    .then(m => m.TeamRoutingModule)
  },
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
