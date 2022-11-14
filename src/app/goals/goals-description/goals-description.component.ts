import { Component, OnInit } from '@angular/core';
import { DividerComponent } from 'src/app/standaloneComp/divider/divider.component';
import { StatisticComponent } from 'src/app/standaloneComp/statistic/statistic.component';

@Component({
  selector: 'app-goals-description',
  standalone: true,
  imports: [DividerComponent, StatisticComponent],
  templateUrl: './goals-description.component.html',
  styleUrls: ['./goals-description.component.scss']
})
export class GoalsDescriptionComponent implements OnInit {

  stats = [
    // { class: 'icon bolt', value: '1', label: 'Megawatt /h' },
    { class: 'icon users', value: '1.000', label: 'People With Stable Electricity'},
    // { class: 'icon frown', value: '100%', label: 'Happy People'},
    { class: 'icon smile', value: '3976', label: 'Happy Qs in the world'},
    { class: 'icon woman', value: '1%', label: 'of hiking Thérèses'},
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }
  
}
