import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './partial/product/product.component';
import { SearchPageComponent } from './search-page/search-page.component';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'category/:id', component: CategoryPageComponent},
  {path: 'product/:id', component: ProductPageComponent},
  {path: 'search/:search', component: SearchPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    CategoryPageComponent,
    ProductPageComponent,
    ProductComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
