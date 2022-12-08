import { Component, OnInit } from '@angular/core';
import { IList } from "../../items/item";
import { ItemService } from "../../items/item.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss']
})
export class ViewLocationComponent implements OnInit{
 
  public listMetadata:IList[] = [];
 
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  //  console.log("view-location NgOnInit()");
    let metaData = this.route.snapshot.data;
  //  console.log("metaData: " + metaData);
    this.listMetadata = JSON.parse(metaData['metaData']);
  //  console.log("this.listMetaData: " + JSON.stringify(this.listMetadata));
  }
}
