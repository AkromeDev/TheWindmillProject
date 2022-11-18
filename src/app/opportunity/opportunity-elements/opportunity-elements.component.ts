import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from 'src/app/standaloneComp/accordion/accordion.component';

@Component({
  selector: 'app-opportunity-elements',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './opportunity-elements.component.html',
  styleUrls: ['./opportunity-elements.component.scss']
})
export class OpportunityElementsComponent implements OnInit {
  protected data = [
    { titleText: "What is the most populated country in South Africa", contentText: "Johannesburg with 5.6 millions habitants"},
    { titleText: "What is the least windy month in Cape Town", contentText: "J The calmest month of the year in Cape Town is May, with an average hourly wind speed of 10.8 miles per hour."},
    { titleText: "What is the windiest month in Cape Town", contentText: "The windiest month of the year in Cape Town is January, with an average hourly wind speed of 13.7 miles per hour. "},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
