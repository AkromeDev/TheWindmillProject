import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsModule } from './goals/goals.module';
import { PayPalComponent } from './pay-pal/pay-pal.component';

@NgModule({
  declarations: [
    AppComponent,
    PayPalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
