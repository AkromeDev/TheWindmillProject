import { Component, OnInit } from '@angular/core';
import { PlaceHolderComponent } from '../standaloneComp/place-holder/place-holder.component';
import { SegmentComponent } from '../standaloneComp/segment/segment.component';
import { ExeriseComponent } from '../standaloneComp/exerise/exerise.component';
import { DividerComponent } from '../standaloneComp/divider/divider.component';
import { OnePageComponent } from '../standaloneComp/one-page/one-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaceHolderComponent, SegmentComponent, ExeriseComponent, DividerComponent, OnePageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
