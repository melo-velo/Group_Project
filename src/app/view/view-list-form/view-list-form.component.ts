import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items/item.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem } from '../../items/item';

@Component({
  selector: 'pm-view-list-form',
  templateUrl: './view-list-form.component.html',
  styleUrls: ['./view-list-form.component.scss']
})
export class ViewListFormComponent implements OnInit{
  public file: File = {} as File;
  public listName:string = "";
  public productName: string = "";
  public productId: string = "";
  public purchasePrice: number = 0.0;
  public purchaseLocation: string = "";
  public datePurchased: string = "";
  public condition: string = "";
  public category: string = "";
  public bogusFormVar: string = "";
  public currentImage = "";
  private imgFileAsString: string = "";

  private fileInput = document.querySelector('#file-select-element');

  constructor(private route: ActivatedRoute, 
              private itemServ:ItemService, 
              private http: HttpClient,
              private myRouter: Router) {}

  ngOnInit() {
    if ('listname' in this.route.snapshot.params){
      this.listName = this.route.snapshot.params['listname'];
      console.log("view-list OnInit listname: " + this.listName);
    }

    this.fileInput?.setAttribute('text', 'Choose Picture File');

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
  onFormSubmit(ngForm:NgForm)
  {
    let newItem:IItem = {
      imageUrl: "", // this.currentImage,
      productName: this.productName,
      productId: this.productId,
      purchasePrice: this.purchasePrice,
      purchaseLocation: this.purchaseLocation,
      datePurchased: this.datePurchased,
      condition: this.condition,
      category: this.category,
    };
    console.log("onFormSubmit(): " + JSON.stringify(newItem));
    this.itemServ.addItem(this.listName, newItem);

    // Clean up the display
    ngForm.resetForm();
    let imgElement = document.querySelector('#item-pic');
    if (imgElement)
    {
      imgElement.setAttribute('src',"");
    }
  }
  // Go back from whence we came
  onFormCancel(){
    this.myRouter.navigate(['inventory-page/list/'+this.listName]);
  }
}
