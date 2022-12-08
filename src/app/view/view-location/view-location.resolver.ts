import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemService } from 'src/app/items/item.service';
import { IList } from '../../items/item';

@Injectable({
  providedIn: 'root'
})
export class ViewLocationResolver implements Resolve<any> {
  constructor(private itemServ: ItemService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.itemServ.getListMetadata();
  }
}
