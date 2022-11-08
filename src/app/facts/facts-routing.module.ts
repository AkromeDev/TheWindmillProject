import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsCollectionComponent } from './facts-collection/facts-collection.component';
import { FirstTabComponent } from './first-tab/first-tab.component';
import { SecondTabComponent } from './second-tab/second-tab.component';
import { ThirdTabComponent } from './third-tab/third-tab.component';

const routes: Routes = [
  { 
    path: '', 
    component: FactsCollectionComponent,
    children: [
      { path: '', component: FirstTabComponent },
      { path: 'q', component: SecondTabComponent },
      { path: 'j', component: ThirdTabComponent },
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FactsRoutingModule { }
  