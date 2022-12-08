import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { IList, IItem } from '../../items/item'

@Component({
  selector: 'pm-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit{
  displayedColumns: string[] = ['imageUrl', 'productName', 'productId', 'purchasePrice', 'purchaseLocation', 'datePurchased', 'condition', 'category', 'actions'];
  dataSource = new MatTableDataSource<IItem>();

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
  //  console.log("view-item ngOnInit()");
  //  console.log(this.route.snapshot.data['listData']);
    let rawData:IList = JSON.parse(JSON.stringify(this.route.snapshot.data['listData'])) as IList;
  //  console.log("view-item: " + JSON.stringify(rawData));
    this.dataSource = new MatTableDataSource(rawData.items);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
