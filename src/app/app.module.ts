import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsModule } from './goals/goals.module';
import { FactsModule } from './facts/facts.module';
import { OpportunityModule } from './opportunity/opportunity.module';
import { SupportModule } from './support/support.module';
import { TeamModule } from './team/team.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoalsModule,
    FactsModule,
    OpportunityModule,
    SupportModule,
    TeamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
