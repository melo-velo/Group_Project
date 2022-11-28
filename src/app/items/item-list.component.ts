import { Component, OnInit } from "@angular/core";
import { IItem } from "./item";

@Component({
  selector: 'itemized-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  pageHeader: string = 'Item List';
  imgWidth = 50;
  imgMargin = 2;
  //listFilter: string = 'item';

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter');
  }

  highValueItems: IItem[] = [
    {
      "imageUrl": "assets/images/Martin.jpg",
      "productName": "Guitar",
      "productId": "567-797372-IBN",
      "purchasePrice": 400,
      "purchaseLocation": "Guitar Center",
      "datePurchased": "May 5, 2018",
      "condition": "Mint",
      "category": "Instruments"
    },
    {
      "imageUrl": "assets/images/bike.png",
      "productName": "Bike",
      "productId": "590-7943372-COL",
      "purchasePrice": 2000,
      "purchaseLocation": "Angry Catfish",
      "datePurchased": "March 7, 2009",
      "condition": "Used",
      "category": "Sports Equipment"
    }
  ];

  /*toggleButton(): void {
    this.showImage = !this.showImage;
  }*/

  ngOnInit(): void {
    this.listFilter = 'item';
  }
}
