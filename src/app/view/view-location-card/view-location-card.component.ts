import { Component } from '@angular/core';

@Component({
  selector: 'pm-view-location-card',
  templateUrl: './view-location-card.component.html',
  styleUrls: ['./view-location-card.component.scss']
})
export class ViewLocationCardComponent {
  public locationName: string = 'Location Name';
  public address: string = 'Address';
}
