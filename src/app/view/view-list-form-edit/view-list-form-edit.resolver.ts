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
export class ViewListFormEditResolver implements Resolve<any> {

  constructor(private itemServ: ItemService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log("view-list-edit resolve() enter" + JSON.stringify(route.params));
    if ('listname' in route.params && 'itemid' in route.params){
      console.log("view-item-edit.resolver : " + JSON.stringify(route.params));
      return this.itemServ.getListItem(route.params['listname'], route.params['itemid']);
    }
    return of('Data not available.');
  }
}
