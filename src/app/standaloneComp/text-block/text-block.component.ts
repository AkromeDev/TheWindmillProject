import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbitronComponent } from '../orbitron/orbitron.component';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [CommonModule, OrbitronComponent],
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
