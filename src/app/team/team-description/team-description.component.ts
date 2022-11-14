import { Component, OnInit } from '@angular/core';
import { DividerComponent } from 'src/app/standaloneComp/divider/divider.component';

@Component({
  selector: 'app-team-description',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.scss']
})
export class TeamDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
