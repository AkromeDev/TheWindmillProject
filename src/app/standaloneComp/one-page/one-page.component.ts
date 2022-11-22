import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-one-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent implements OnInit {
  scrolled: boolean = false;
  activeTab: string = 'home';

  protected setActiveTab (tab: string) {
    this.activeTab = tab;
  }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.scrolled = window.scrollY > 110;
    }

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    { 
      imageSrc: 'assets/images/people/t-square.jpeg', 
      buttonText: 'Text me',
      headerText: 'Thérèse Ringler, best of the best',
      dateText: 'Since the 1st of January 2000, she is pretty young',
      iconClass: 'venus mars',
      iconText: 'She IS the man eater',
    },
    { 
      imageSrc: 'assets/images/people/q-square.jpeg', 
      buttonText: 'Squeeze me',
      headerText: 'Q Quiblier Alex Antoine. Buveur de Picon Chouf',
      dateText: 'Since Marseille existed, his soul was lighted on',
      iconClass: 'bolt',
      iconText: 'The Master of Apfel Apps',
    },
    { 
      imageSrc: 'assets/images/people/j-square.jpeg', 
      buttonText: 'Call me baby',
      headerText: 'Mojo Chatelain, Aka Christ Juses',
      dateText: 'Since the day he opened he flambed a fart',
      iconClass: 'blind',
      iconText: 'The Challenger',
    },
  ];
}
