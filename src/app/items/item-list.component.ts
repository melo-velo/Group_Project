import { Component, OnInit } from "@angular/core";
import { IItem } from "./item";
import { ItemService } from "./item.service";

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
    this.filteredItems = this.runFilterOnItems(value);
  }

  filteredItems: IItem[] = [];

  highValueItems: IItem[] = [];

  constructor(private itemService: ItemService) {}

  runFilterOnItems(runFilter: string): IItem[] {
    runFilter = runFilter.toLowerCase();
    return this.highValueItems.filter((item: IItem) =>
    item.productName.toLocaleLowerCase().includes(runFilter));
  }

  /*toggleButton(): void {
    this.showImage = !this.showImage;
  }*/

  ngOnInit(): void {
    this.highValueItems = this.itemService.getItems();
    this.filteredItems = this.highValueItems;
  }
}
