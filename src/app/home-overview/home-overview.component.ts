import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export interface OverviewCardData {
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'pm-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class HomeOverviewComponent {
  card1: OverviewCardData = {state: "default"};
  card2: OverviewCardData = {state: "default"};
  card3: OverviewCardData = {state: "default"};
  card4: OverviewCardData = {state: "default"};



  card1Clicked() {
    if (this.card1.state === "default") {
      this.card1.state = "flipped";
    } else {
      this.card1.state = "default";
    }
  }

  card2Clicked() {
    if (this.card2.state === "default") {
      this.card2.state = "flipped";
    } else {
      this.card2.state = "default";
    }
  }

  card3Clicked() {
    if (this.card3.state === "default") {
      this.card3.state = "flipped";
    } else {
      this.card3.state = "default";
    }
  }

  card4Clicked() {
    if (this.card4.state === "default") {
      this.card4.state = "flipped";
    } else {
      this.card4.state = "default";
    }
  }
}
