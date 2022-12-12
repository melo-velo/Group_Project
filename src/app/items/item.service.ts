import { Injectable } from "@angular/core";
import { IItem, IList, IDataPacket, OpCodes } from "../items/item";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url:string = "http://localhost:4201";
 
  constructor(private http: HttpClient){}

  getListItems(listName:string) {
    console.log("getListItems: " + listName);
    return this.http.get(this.url + '/' + listName);
  }
  getListItem(listName:string, itemID:number) {
    console.log("getListItems: " + listName);
    return this.http.get(this.url + '/' + listName + '/' + itemID);    
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

  updateListItem(listName:string, newItem:IItem)
  {
    let USER_ID = 'GLOBAL';

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    const data:IDataPacket = {
      opcode: OpCodes.UpdateListItem,
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

  deleteListItem(listName:string, itemID:number)
  {
    console.log("itemTS:deleteListItem()");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    console.log("itemTS:delete() " + this.url + '/' + listName + '/' + itemID);
    return this.http.delete(this.url + '/' + listName + '/' + itemID, options).subscribe(data => {
      console.log(data);
      }); 
  }
  deleteList(listName:string)
  {
    console.log("itemTS:deleteList()");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    console.log("itemTS:delete() " + this.url + '/' + listName);
    return this.http.delete(this.url + '/' + listName, options).subscribe(data => {
      console.log(data);
      }); 
  }
}
