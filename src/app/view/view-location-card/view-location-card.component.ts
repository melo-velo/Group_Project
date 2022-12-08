import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IList } from "../../items/item";

@Component({
  selector: 'pm-view-location-card',
  templateUrl: './view-location-card.component.html',
  styleUrls: ['./view-location-card.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ViewLocationCardComponent implements OnInit{
  // Bring the IList 
  @Input() item? : IList;

  public locationName: string = '';
  public address: string = '';
  public itemUrl: string = '';
  public itemListName: string = '';

  constructor(private myRouter:Router) {}

  ngOnInit(){
    console.log("view-location-card NgOnInit()");
    if (this.item != undefined)
    {    
      this.locationName = this.item.listname;
      this.address = this.item.listaddress;  
      this.itemUrl = this.item.coverimageurl;
      this.itemListName = this.item.listname;
    }
  }

//  OnShowList(){
//    console.log("OnShowList() navigating too: list/"+this.itemListName);
//    this.myRouter.navigate(['list/'+this.itemListName]);
//  }
}
