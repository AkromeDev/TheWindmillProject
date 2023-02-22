import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paragraph-lines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph-lines.component.html',
  styleUrls: ['./paragraph-lines.component.scss']
})
export class ParagraphLinesComponent implements OnInit {
  @Input() color: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
