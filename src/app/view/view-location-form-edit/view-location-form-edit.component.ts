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

  ngOnInit() {}

  onFormSubmit(ngForm:NgForm) {

  }
}
