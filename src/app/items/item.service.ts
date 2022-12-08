import { Injectable, NgModule } from "@angular/core";
import { IItem, IList } from "../items/item";
import list from '../../assets/json/list.json';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { getMultipleValuesInSingleSelectionError } from "@angular/cdk/collections";
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url:string = "http://localhost:4201";
 
  constructor(private http: HttpClient){}

  // Legacy function, gets the initial JSON, will remove soon.
  getItems(): IItem[] {
  
    /* work in progress, return the local file so we don't break the rest of the team */
    let remoteList = this.http.request('get', this.url);
    console.log(remoteList);
  
    return list;
  }
  getListItems(listName:string) {
    console.log("getListItems: " + listName);
    
    return this.http.get(this.url + '/' + listName);
  }

  getListMetadata() {
    // The Express backend default GET (no parameters) returns the List Of Lists without the actual list items
    return this.http.get(this.url);
  }

  addItem(/* listName:IList,*/ newItem:IItem)
  {
//    console.log(JSON.stringify(newItem));
//    return this.http.request('post', JSON.stringify(newItem));
  }
  
  //  getItem(/* listName:IList,*/ id:string){}

  //  updateItem(/* listName:IList,*/ id:string){}
  
  //  createNewList( listName:IList ){}

  //  deleteItem(/* listName:IList,*/ id:string){}

  //  deleteList(listName:IList){}


}
