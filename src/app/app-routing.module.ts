import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ViewLocationComponent} from "./view/view-location/view-location.component";
import {ViewHomeComponent} from "./view/view-home/view-home.component";
import {ViewLocationFormComponent} from "./view/view-location-form/view-location-form.component";
import {ViewItemComponent} from "./view/view-item/view-item.component";
import {ViewListFormComponent} from "./view/view-list-form/view-list-form.component";

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
