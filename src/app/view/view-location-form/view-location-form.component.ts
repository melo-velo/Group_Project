import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items/item.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem, IList } from '../../items/item';

@Component({
  selector: 'pm-view-location-form',
  templateUrl: './view-location-form.component.html',
  styleUrls: ['./view-location-form.component.scss']
})
export class ViewLocationFormComponent implements OnInit {

  public listName:string = "";
  public listID:number = Math.floor(Math.random() * 10)+1;
  public listAddress:string = "";

  constructor(private itemServ:ItemService){}

  ngOnInit() {}

  onFormSubmit(ngForm:NgForm)
  {
    let newList:IList = {
      listid: this.listID,
      listname: this.listName,
      listaddress: this.listAddress,
      coverimageurl: "", // this.currentImage,
      items: [],
    };

    console.log("NewList: onFormSubmit(): " + JSON.stringify(newList));
    this.itemServ.createNewList(newList);

    // Clean up the display
    ngForm.resetForm();
    let imgElement = document.querySelector('#item-pic');
    if (imgElement)
    {
      imgElement.setAttribute('src',"");
    }
  }

  onClickCancel(){}
}
