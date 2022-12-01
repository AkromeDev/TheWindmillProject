import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
 @Input() imageSrc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
      return "url(" + this.imageSrc + ")";
    }
}
