import { Component, OnInit } from '@angular/core';
import { IList } from "../../items/item";
import { ItemService } from "../../items/item.service";

@Component({
  selector: 'pm-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss']
})
export class ViewLocationComponent implements OnInit{
 
  public listMetadata:IList[] = [];
 
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    console.log("view-location NgOnInit()");
    this.listMetadata = this.itemService.getListMetadata(); 
    console.log("ngOnInit got: " + JSON.stringify(this.listMetadata));
  }
}
