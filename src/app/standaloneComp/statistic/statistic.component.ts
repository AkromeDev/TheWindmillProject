import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {
  }
}
