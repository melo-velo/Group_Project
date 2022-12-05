import { Component, OnInit, Input } from '@angular/core';
import { IList } from "../../items/item";

@Component({
  selector: 'pm-view-location-card',
  templateUrl: './view-location-card.component.html',
  styleUrls: ['./view-location-card.component.scss']
})
export class ViewLocationCardComponent implements OnInit{
  // Bring the IList 
  @Input() item? : IList;

  public locationName: string = '';
  public address: string = '';

  ngOnInit(){
    console.log("view-location-card NgOnInit()");
    if (this.item != undefined)
    {

      
      this.locationName = this.item.listname;
      this.address = this.item.listaddress;  
    }
  }
}
