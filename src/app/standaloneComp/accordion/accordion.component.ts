import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() data: any = [];
  protected openIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  protected onClickIndex(index: number) {
    if (index == this.openIndex) {
      this.openIndex = -1;
    } else {
      this.openIndex = index;
    }
  }
}
