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
  public displayedColumns: string[] = ['imageUrl', 'productName', 'productId', 'purchasePrice', 'purchaseLocation', 'datePurchased', 'condition', 'category', 'actions'];
  public dataSource = new MatTableDataSource<IItem>();
  public listName:string = "";

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    let rawData:IList = JSON.parse(JSON.stringify(this.route.snapshot.data['listData'])) as IList;
    this.dataSource = new MatTableDataSource(rawData.items);
    this.listName = rawData.listname;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
