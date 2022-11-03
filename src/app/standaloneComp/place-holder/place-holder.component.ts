import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesDirective } from '../../directives/times/times.directive';

@Component({
  selector: 'app-place-holder',
  standalone: true,
  imports: [CommonModule, TimesDirective],
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
