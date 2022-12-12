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

  constructor(private route:ActivatedRoute, 
              private itemServ:ItemService,
              private myRouter: Router) {}

  ngOnInit() {
    console.log("view-list-form-edit:onNgInit() snapshot.data: " + JSON.stringify(this.route.snapshot.data));
    
    this.listName = this.route.snapshot.data['itemData']['Name'];
    console.log("listName: " + this.listName);

    let myItem:IItem = JSON.parse(JSON.stringify(this.route.snapshot.data['itemData']['data']));
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

  // When the save button is clicked
  onFormSubmit() {
    let myItem:IItem = {
      imageUrl: this.currentImage, 
      productName: this.productName,
      productId: this.productId,
      purchasePrice: this.purchasePrice,
      purchaseLocation: this.purchaseLocation,
      datePurchased: this.datePurchased,
      condition: this.condition,
      category: this.category,
      iid: this.itemID
    } as IItem;

    this.itemServ.updateListItem(this.listName, myItem);
    this.myRouter.navigate(['inventory-page/list/' + this.listName]);
  };

  // When the cancel button is clicked
  onFormCancel(){
    this.myRouter.navigate(['inventory-page/list/' + this.listName]);
  }

  // On file Select
  onChange(event:any) {
    let imgElement:HTMLImageElement = document.querySelector('img') as HTMLImageElement;
    if (imgElement)
    {
      // Convert the image to a base64 string for transport to the backend
      let reader = new FileReader();
      reader.addEventListener("loadend", (ev) => {
        this.currentImage = reader.result as string;
      }, false);

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
