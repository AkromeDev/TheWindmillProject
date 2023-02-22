import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphLinesComponent } from '../paragraph-lines/paragraph-lines.component';

@Component({
  selector: 'app-photo-caption',
  standalone: true,
  imports: [CommonModule, ParagraphLinesComponent],
  templateUrl: './photo-caption.component.html',
  styleUrls: ['./photo-caption.component.scss']
})
export class PhotoCaptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
