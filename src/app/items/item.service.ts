import { Injectable } from "@angular/core";
import { IItem, IList } from "../items/item";
import list from '../../assets/json/list.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getMultipleValuesInSingleSelectionError } from "@angular/cdk/collections";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url:string = "http://localhost:4201";
  
  constructor(private http: HttpClient){}

  private async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  getItems(): IItem[] {
  
    /* work in progress, return the local file so we don't break the rest of the team */
    let remoteList = this.http.request('get', this.url);
    console.log(remoteList);
  
    return list;
  }

  private loadMetaData(retVal:IList[]){
    console.log("Entering loadMetaData()");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
    };

    this.http.get<any>(this.url, options)
      .subscribe({
        next: (data) => {
          console.log("LMD: " + data);
          retVal = JSON.parse(JSON.stringify(data));
        },
        error: (err) => {
          console.error("Error occurred: " + err);
        }
      });
  }
  async getListMetadata(): Promise<IList[]> {

    console.log("Entering getListMetadata()");

    let retVal:IList[] = [];

    if (retVal.length == 0)
    {
      await this.loadMetaData(retVal);
    }

    console.log("getListMetadata returning: " + retVal);
    return retVal;
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
