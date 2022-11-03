import { Component, OnInit } from '@angular/core';
import { DividerComponent } from '../standaloneComp/divider/divider.component';
import { PlaceHolderComponent } from '../standaloneComp/place-holder/place-holder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaceHolderComponent, DividerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
