import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { DividerComponent } from 'src/app/standaloneComp/divider/divider.component';
import { TableComponent } from 'src/app/standaloneComp/table/table.component';

@Component({
  selector: 'app-facts-collection',
  standalone: true,
  imports: [CommonModule, DividerComponent, TableComponent, RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './facts-collection.component.html',
  styleUrls: ['./facts-collection.component.scss']
})
export class FactsCollectionComponent implements OnInit {
  data = [
    {country: 'South Africa', rank: 1, averageWindSpeed: '15 knots'},
    {country: 'South Sudan', rank: 2, averageWindSpeed: '13 knots'},
    {country: 'South Korea', rank: 3, averageWindSpeed: '10 knots'},
  ];
  headers = [
    { key: 'country', label: 'Country' },
    { key: 'rank', label: 'Rank' },
    { key: 'averageWindSpeed', label: 'Average Wind Speed' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
