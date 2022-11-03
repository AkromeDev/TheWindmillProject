import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DividerComponent } from 'src/app/standaloneComp/divider/divider.component';
import { TableComponent } from 'src/app/standaloneComp/table/table.component';

@Component({
  selector: 'app-facts-collection',
  standalone: true,
  imports: [CommonModule, DividerComponent, TableComponent],
  templateUrl: './facts-collection.component.html',
  styleUrls: ['./facts-collection.component.scss']
})
export class FactsCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
