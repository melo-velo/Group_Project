import { Injectable } from "@angular/core";
import { IItem } from "./item";
import list from '../../assets/json/list.json';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url:string = "http://localhost:4201";

  //constructor(private http: HttpClient){}

  getItems(): IItem[] {
  
    /* work in progress, return the local file so we don't break the rest of the team */
    //let remoteList = this.http.request('get', this.url);
    //console.log(remoteList);
  
    return list;
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
