import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items/item.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem, IList } from '../../items/item';

@Component({
  selector: 'pm-view-location-form-edit',
  templateUrl: './view-location-form-edit.component.html',
  styleUrls: ['./view-location-form-edit.component.scss']
})
export class ViewLocationFormEditComponent implements OnInit {
  public listName:string = "";
  public listID:number = 0;
  public listAddress:string = "";
  public listCoverImage: string = "";

  constructor (private route:ActivatedRoute,
               private itemServ:ItemService,
               private router:Router ){}
  ngOnInit() {
    let rawData:IList = JSON.parse(JSON.stringify(this.route.snapshot.data['listData'])) as IList;

    this.listName = rawData.listname;
    this.listID = rawData.listid;
    this.listAddress = rawData.listaddress;
    this.listCoverImage = rawData.coverimageurl;
  }

   // onFormSubmit(ngForm:NgForm) {
   onFormSubmit() {
    console.log("formSubmit event.");
    let myList:IList = {
      listid: this.listID,
      listname: this.listName,
      listaddress: this.listAddress,
      coverimageurl: this.listCoverImage,
      items: [],
    } as IList;
    
    this.itemServ.updateListMetadata(myList);

    this.router.navigate(['inventory-page/dashboard']);
  }
  onCancelClick()
  {
    console.log("Cancel clicked.");
    this.router.navigate(['inventory-page/dashboard']);
  }
}
