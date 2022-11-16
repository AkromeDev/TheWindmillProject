import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards: any = [];
  mouseoverCard = false;

  
  // private method() {
  //   document.getElementById('.special.cards .image').dimmer({
  //     on: 'hover'
  //   });
  //   document.body.getElementsByClassName('.special.cards .image').dimmer({on: 'hover'});
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
