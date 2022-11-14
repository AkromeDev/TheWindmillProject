import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/standaloneComp/card/card.component';
import { DividerComponent } from 'src/app/standaloneComp/divider/divider.component';

@Component({
  selector: 'app-team-description',
  standalone: true,
  imports: [DividerComponent, CardComponent],
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.scss']
})
export class TeamDescriptionComponent implements OnInit {
cards = [
  { imageSrc: 'assets/images/OnOff/404OffTransparent.jpeg', buttonText: 'Text me'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
