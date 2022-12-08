import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ViewLocationComponent} from "./view/view-location/view-location.component";
import {ViewHomeComponent} from "./view/view-home/view-home.component";
import {ViewLocationFormComponent} from "./view/view-location-form/view-location-form.component";
import {ViewItemComponent} from "./view/view-item/view-item.component";
import {ViewListFormComponent} from "./view/view-list-form/view-list-form.component";
import { ViewLocationResolver } from "./view/view-location/view-location.resolver";
import { ViewItemResolver } from "./view/view-item/view-item.resolver";
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [
  {path: 'home', component: ViewHomeComponent},
  {path: 'dashboard', component: ViewLocationComponent, resolve: {metaData: ViewLocationResolver}},
  // {path: 'list', component: ViewItemComponent},
  {path: 'list/:listname', component: ViewItemComponent, resolve: {listData: ViewItemResolver}},
  {path: 'location-form', component: ViewLocationFormComponent},
  {path: 'list-form', component: ViewListFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createaccount', component: CreateaccountComponent},
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
