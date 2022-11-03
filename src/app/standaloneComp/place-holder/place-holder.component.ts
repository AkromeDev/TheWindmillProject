import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.scss']
})
export class PlaceHolderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
