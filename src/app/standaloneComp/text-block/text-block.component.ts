import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
