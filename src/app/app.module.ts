import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ViewLocationComponent } from './view/view-location/view-location.component';
import { ViewHeaderComponent } from './view/view-header/view-header.component';
import { ViewSidebarComponent } from './view/view-sidebar/view-sidebar.component';
import { ViewLocationCardComponent } from './view/view-location-card/view-location-card.component';
import { ViewHomeComponent } from './view/view-home/view-home.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ViewLocationFormComponent } from './view/view-location-form/view-location-form.component';
import { MatInputModule } from '@angular/material/input';
import { ViewItemComponent } from './view/view-item/view-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViewListFormComponent } from './view/view-list-form/view-list-form.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuthOptions } from '@okta/okta-auth-js';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PageInventoryComponent } from './page-inventory/page-inventory.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { ViewLocationFormEditComponent } from './view/view-location-form-edit/view-location-form-edit.component';
import { ViewListFormEditComponent } from './view/view-list-form-edit/view-list-form-edit.component';
import { AboutComponent } from './about/about.component';
import { HomeCoverComponent } from './home-cover/home-cover.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {MatGridListModule} from '@angular/material/grid-list';


const oktaConfig: OktaAuthOptions = {
  issuer: 'https://dev-13798108.okta.com',
  clientId: '0oa7l1c04dPacXUdY5d7',
  redirectUri: 'http://localhost:4200/inventory-page/'
};



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
    ViewLocationFormEditComponent,
    ViewListFormEditComponent,
    AboutComponent,
    HomeCoverComponent,
    HomeOverviewComponent,
    QuestionsComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    OktaAuthModule,
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {
}


