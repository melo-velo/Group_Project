import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ItemService } from 'src/app/items/item.service';

@Injectable({
  providedIn: 'root'
})
export class ViewItemResolver implements Resolve<any> {

  constructor(private itemServ:ItemService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if ('listname' in route.params){
      console.log("view-item.resolver : " + route.params.toString());
      return this.itemServ.getListItems(route.params['listname']);
//    console.log("view-item.resolver.resolve()");
//    return this.itemServ.getListItems();
    }
    return of('Data not available.');
  }
}
