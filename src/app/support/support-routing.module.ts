import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayPalComponent } from './pay-pal/pay-pal.component';

const routes: Routes = [
  { path: 'paypal', component : PayPalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
