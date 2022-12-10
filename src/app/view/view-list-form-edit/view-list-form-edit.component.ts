import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../items/item.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItem } from '../../items/item';

@Component({
  selector: 'pm-view-list-form-edit',
  templateUrl: './view-list-form-edit.component.html',
  styleUrls: ['./view-list-form-edit.component.scss']
})
export class ViewListFormEditComponent implements OnInit{
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

  ngOnInit() {

  };

  onFormSubmit(ngForm:NgForm) {

  };

  onChange(event:any) {

  };

  onFormCancel(){

  }
}
