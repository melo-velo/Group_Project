import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemService } from 'src/app/items/item.service';

@Injectable({
  providedIn: 'root'
})
export class ViewLocationFormEditResolver implements Resolve<any> {
  
  constructor(private itemServ:ItemService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if ('listname' in route.params){
      console.log("view-location-form-edit.resolver : " + route.params.toString());
      return this.itemServ.getListItems(route.params['listname']);
    }
    return of('Data not available.');
  }
}
