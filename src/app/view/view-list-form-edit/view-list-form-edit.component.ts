import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items/item.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem, IList } from '../../items/item';

@Component({
  selector: 'pm-view-list-form-edit',
  templateUrl: './view-list-form-edit.component.html',
  styleUrls: ['./view-list-form-edit.component.scss']
})
export class ViewListFormEditComponent implements OnInit{
//  public file: File = {} as File;
  public currentImage = "";
  public productName: string = "";
  public productId: string = "";
  public purchasePrice: number = 0.0;
  public purchaseLocation: string = "";
  public datePurchased: string = "";
  public condition: string = "";
  public category: string = "";
  public itemID = 0;

  public bogusFormVar = "";

  private listName:string = "";
  private fileInput = document.querySelector('#file-select-element');

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    console.log("view-list-form-edit:onNgInit() snapshot.data: " + JSON.stringify(this.route.snapshot.data));
    let myItem:IItem = JSON.parse(JSON.stringify(this.route.snapshot.data['itemData']));

    console.log("myItem: " + JSON.stringify(myItem));

    this.currentImage = myItem.imageUrl;
    this.productName = myItem.productName;
    this.productId = myItem.productId;
    this.purchasePrice = myItem.purchasePrice;
    this.purchaseLocation = myItem.purchaseLocation;
    this.datePurchased = myItem.datePurchased;
    this.condition = myItem.condition;
    this.category = myItem.category;
    this.itemID = myItem.iid;
  };

  onFormSubmit(ngForm:NgForm) {

  };

  onChange(event:any) {

  };

  onFormCancel(){

  }
}
