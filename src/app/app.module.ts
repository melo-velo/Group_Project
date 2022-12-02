import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import { ViewLocationComponent } from './view-location/view-location.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { ViewSidebarComponent } from './view-sidebar/view-sidebar.component';
import { ViewLocationCardComponent } from './view-location-card/view-location-card.component';
import { ViewHomeComponent } from './view-home/view-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ViewLocationComponent,
    ViewHeaderComponent,
    ViewSidebarComponent,
    ViewLocationCardComponent,
    ViewHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
