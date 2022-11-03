import { Component, OnInit } from '@angular/core';
import { PlaceHolderComponent } from '../standaloneComp/place-holder/place-holder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaceHolderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
