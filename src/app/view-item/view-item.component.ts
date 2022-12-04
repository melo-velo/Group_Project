import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


const ITEM_DATA = [
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
  },
  {
    "imageUrl": "assets/images/camera.jpg",
    "productName": "Camera",
    "productId": "780-73643012-UAD",
    "purchasePrice": 785,
    "purchaseLocation": "Best Buy",
    "datePurchased": "January 2, 2014",
    "condition": "Good",
    "category": "Electronics"
  }
];

@Component({
  selector: 'pm-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent {
  displayedColumns: string[] = ['imageUrl', 'productName', 'productId', 'purchasePrice', 'purchaseLocation', 'datePurchased', 'condition', 'category', 'actions'];
  dataSource = new MatTableDataSource(ITEM_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
