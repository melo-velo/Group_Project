import { Component } from '@angular/core';

interface Review {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'pm-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

  export class ReviewsComponent {

    imgWidth = 150;
    imgMargin = 6;

  reviews: Review[] = [
    {value: '5-stars', viewValue: 'Awesome'},
    {value: '4-stars', viewValue: 'Good'},
    {value: '3-stars', viewValue: 'Okay'},
    {value: '2-stars', viewValue: 'Bad'},
    {value: '1-stars', viewValue: 'Terrible'},
  ];


}
