import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IList, IItem } from '../../items/item'
import { ItemService } from '../../items/item.service';

@Component({
  selector: 'pm-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit{
  public displayedColumns: string[] = ['imageUrl', 'productName', 'productId', 'purchasePrice', 'purchaseLocation', 'datePurchased', 'condition', 'category', 'actions', 'iid'];
  public dataSource = new MatTableDataSource<IItem>();
  public listName:string = "";

  constructor(private route:ActivatedRoute,
              private itemServ:ItemService,
              private myRouter: Router) {}

  ngOnInit() {
    let rawData:IList = JSON.parse(JSON.stringify(this.route.snapshot.data['listData'])) as IList;
    this.dataSource = new MatTableDataSource(rawData.items);
    this.listName = rawData.listname;
  }

  onClickDelete(itemId:number){
    console.log("OnClickDelete ");
    this.itemServ.deleteListItem(this.listName, itemId);
    this.myRouter.navigate(['/inventory-page/list/' + this.listName]);

    // Hit it with the BFH because router.navigate() wasn't enough
    window.location.reload();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
