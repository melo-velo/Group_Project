import { Injectable, NgModule } from "@angular/core";
import { IItem, IList, IDataPacket, OpCodes } from "../items/item";
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

  addItem(listName:string, newItem:IItem)
  {
    let USER_ID = 'GLOBAL';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    const data:IDataPacket = {
      opcode: OpCodes.AddItem,
      user: USER_ID,
      listName: listName,
      item: newItem
    }

    this.http.post<any>(this.url, JSON.stringify(data), options)
        .subscribe({
          next: () => {
            console.log("Call successful");
          },
          error: (err) => {
            console.error("Error occurred: " + err);
          }
        });
  }
  
  createNewList( listName:IList ){
    let USER_ID = 'GLOBAL';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    const data:IDataPacket = {
      opcode: OpCodes.AddList,
      user: USER_ID,
      listName: listName.listname,
      item: listName
    }

    this.http.post<any>(this.url, JSON.stringify(data), options)
        .subscribe({
          next: () => {
            console.log("Call successful");
          },
          error: (err) => {
            console.error("Error occurred: " + err);
          }
        });
  }
  
  updateListMetadata(listMD:IList){
    let USER_ID = 'GLOBAL';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    const data:IDataPacket = {
      opcode: OpCodes.UpdateListMetaData,
      user: USER_ID,
      listName: listMD.listname,
      item: listMD
    }

    this.http.post<any>(this.url, JSON.stringify(data), options)
        .subscribe({
          next: () => {
            console.log("Call successful");
          },
          error: (err) => {
            console.error("Error occurred: " + err);
          }
        });
  }

  //  getItem(/* listName:IList,*/ id:string){}

  //  updateItem(/* listName:IList,*/ id:string){}
  

  //  deleteItem(/* listName:IList,*/ id:string){}

  //  deleteList(listName:IList){}


}
