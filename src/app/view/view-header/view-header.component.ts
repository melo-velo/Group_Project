import { Component } from '@angular/core';

@Component({
  selector: 'pm-view-header',
  templateUrl: './view-header.component.html',
  styleUrls: ['./view-header.component.scss']
})
export class ViewHeaderComponent {
  public userName: string = 'User Name';
}
