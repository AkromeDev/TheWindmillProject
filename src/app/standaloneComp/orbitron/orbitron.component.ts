import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orbitron',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orbitron.component.html',
  styleUrls: ['./orbitron.component.scss']
})
export class OrbitronComponent implements OnInit {
  @Input() color: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
