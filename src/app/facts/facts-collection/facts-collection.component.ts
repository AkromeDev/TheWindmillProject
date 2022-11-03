import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DividerComponent } from 'src/app/atomic-components/divider/divider.component';

@Component({
  selector: 'app-facts-collection',
  standalone: true,
  imports: [CommonModule, DividerComponent],
  templateUrl: './facts-collection.component.html',
  styleUrls: ['./facts-collection.component.scss']
})
export class FactsCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
