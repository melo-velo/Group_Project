import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewLocationComponent} from "./view-location/view-location.component";
import {ItemListComponent} from "./items/item-list.component";
import {ViewHomeComponent} from "./view-home/view-home.component";
import {ViewLocationFormComponent} from "./view-location-form/view-location-form.component";
import {ViewItemComponent} from "./view-item/view-item.component";
import {ViewListFormComponent} from "./view-list-form/view-list-form.component";

const routes: Routes = [
  {path: 'home', component: ViewHomeComponent},
  {path: 'dashboard', component: ViewLocationComponent},
  {path: 'list', component: ViewItemComponent},
  {path: 'location-form', component: ViewLocationFormComponent},
  {path: 'list-form', component: ViewListFormComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule { }
