import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsModule } from './goals/goals.module';
import { FactsModule } from './facts/facts.module';
import { OpportunityModule } from './opportunity/opportunity.module';
import { SupportModule } from './support/support.module';
import { TeamModule } from './team/team.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    GoalsModule,
    FactsModule,
    OpportunityModule,
    SupportModule,
    TeamModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
