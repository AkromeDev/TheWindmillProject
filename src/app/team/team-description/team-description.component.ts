import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/standaloneComp/card/card.component';
import { DividerComponent } from 'src/app/standaloneComp/divider/divider.component';

@Component({
  selector: 'app-team-description',
  standalone: true,
  imports: [DividerComponent, CardComponent],
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.scss']
})
export class TeamDescriptionComponent implements OnInit {
  cards = [
    { 
      imageSrc: 'assets/images/people/t.jpeg', 
      buttonText: 'Text me',
      headerText: 'Thérèse Ringler, best of the best',
      dateText: 'Since the 1st of January 2000, she is pretty young',
      iconClass: 'venus mars',
      iconText: 'She IS the man eater',
    },
    { 
      imageSrc: 'assets/images/people/q.jpeg', 
      buttonText: 'Squeeze me',
      headerText: 'Q Quiblier Alex Antoine. Buveur de Picon Chouf',
      dateText: 'Since Marseille existed, his soul was lighted on',
      iconClass: 'bolt',
      iconText: 'The Master of Apfel Apps',
    },
    { 
      imageSrc: 'assets/images/people/j.jpeg', 
      buttonText: 'Call me baby',
      headerText: 'Mojo Chatelain, Aka Christ Juses',
      dateText: 'Since the day he opened he flambed a fart',
      iconClass: 'blind',
      iconText: 'The Challenger',
    },
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
