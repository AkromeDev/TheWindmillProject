import { Component, OnInit } from '@angular/core';
import { AtomicComponentsModule } from '../atomic-components/atomic-components.module';
import { PlaceHolderComponent } from '../standaloneComp/place-holder/place-holder.component';
import { SegmentComponent } from '../standaloneComp/segment/segment.component';
import { ExeriseComponent } from '../standaloneComp/exerise/exerise.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlaceHolderComponent, AtomicComponentsModule, SegmentComponent, ExeriseComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
