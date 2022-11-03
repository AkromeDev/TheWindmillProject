import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
