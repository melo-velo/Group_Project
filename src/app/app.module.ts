import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import { ViewLocationComponent } from './view/view-location/view-location.component';
import { ViewHeaderComponent } from './view/view-header/view-header.component';
import { ViewSidebarComponent } from './view/view-sidebar/view-sidebar.component';
import { ViewLocationCardComponent } from './view/view-location-card/view-location-card.component';
import { ViewHomeComponent } from './view/view-home/view-home.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { ViewLocationFormComponent } from './view/view-location-form/view-location-form.component';
import {MatInputModule} from '@angular/material/input';
import { ViewItemComponent } from './view/view-item/view-item.component';
import {MatTableModule} from '@angular/material/table';
import { ViewListFormComponent } from './view/view-list-form/view-list-form.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PageInventoryComponent } from './page-inventory/page-inventory.component';
import { PageHomeComponent } from './page-home/page-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ViewLocationComponent,
    ViewHeaderComponent,
    ViewSidebarComponent,
    ViewLocationCardComponent,
    ViewHomeComponent,
    ViewLocationFormComponent,
    ViewItemComponent,
    ViewListFormComponent,
    LoginComponent,
    CreateaccountComponent,
    PageInventoryComponent,
    PageHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
