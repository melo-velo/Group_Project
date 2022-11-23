import { Component } from "@angular/core";

@Component({
  selector: 'itemized-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  pageHeader: string = 'Item List';
  imgWidth = 50;
  imgMargin = 2;

  highValueItems: any[] = [
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
}
