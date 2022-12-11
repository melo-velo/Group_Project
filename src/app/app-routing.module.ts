import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ViewLocationComponent } from "./view/view-location/view-location.component";
import { ViewLocationFormComponent } from "./view/view-location-form/view-location-form.component";
import { ViewItemComponent } from "./view/view-item/view-item.component";
import { ViewListFormComponent } from "./view/view-list-form/view-list-form.component";
import { ViewLocationResolver } from "./view/view-location/view-location.resolver";
import { ViewItemResolver } from "./view/view-item/view-item.resolver";
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PageInventoryComponent } from "./page-inventory/page-inventory.component";
import { PageHomeComponent } from "./page-home/page-home.component";
import { ViewLocationFormEditComponent } from "./view/view-location-form-edit/view-location-form-edit.component";
import { ViewListFormEditComponent } from "./view/view-list-form-edit/view-list-form-edit.component";
import { AboutComponent } from './about/about.component';
import { HomeCoverComponent } from "./home-cover/home-cover.component";
import { HomeOverviewComponent } from "./home-overview/home-overview.component";
import { OktaCallbackComponent } from '@okta/okta-angular';
import { ReviewsComponent } from './reviews/reviews.component';
import { QuestionsComponent } from './questions/questions.component';
import {ViewLocationFormEditResolver} from './view/view-location-form-edit/view-location-form-edit.resolver';

const routes: Routes = [
  {path: 'home', component: PageHomeComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'createaccount', component: CreateaccountComponent},
      {path: 'callback', component: OktaCallbackComponent },
      {path: 'about', component: AboutComponent },
      {path: 'home-cover', component: HomeCoverComponent},
      {path: 'home-overview', component: HomeOverviewComponent},
      {path: 'questions', component: QuestionsComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]
  },

  {path: 'inventory-page', component: PageInventoryComponent,
    children: [
      {path: 'dashboard', component: ViewLocationComponent, resolve: {metaData: ViewLocationResolver}, pathMatch: "full"},
      // {path: 'list', component: ViewItemComponent},
      {path: 'list/:listname', component: ViewItemComponent, resolve: {listData: ViewItemResolver}, pathMatch: "full"},
      {path: 'location-form', component: ViewLocationFormComponent},
      // {path: 'location-form-edit', component: ViewLocationFormEditComponent},
      {path: 'location-form-edit/:listname', component: ViewLocationFormEditComponent, resolve: {listData: ViewLocationFormEditResolver}, pathMatch: "full"},
      {path: 'list-form/:listname', component: ViewListFormComponent, pathMatch: "full"},
      {path: 'list-form-edit', component: ViewListFormEditComponent}
    ]
  },

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
