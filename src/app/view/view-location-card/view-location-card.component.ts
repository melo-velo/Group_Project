import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IList } from "../../items/item";
import { ItemService } from '../../items/item.service';

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
  imgWidth = 150;
  imgMargin = 6;

  constructor(private myRouter:Router, private itemServ:ItemService,) {}

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

  onClickDelete(){
    console.log("loc-card OnClickDelete ");
    this.itemServ.deleteList(this.itemListName);

    this.myRouter.navigate(['/inventory-page/list/' + this.itemListName]);

    // Hit it with the BFH because router.navigate() wasn't enough
    window.location.reload();
  }
}
