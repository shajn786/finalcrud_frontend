import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

const myRoutes : Routes = [
  {
    path : "",component:AddcustomerComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"delete",component:DeleteComponent
  },
  {
    path:"allcustomer",component:AllcustomerComponent
  },
  {
    path:"update",component:UpdateComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    SearchComponent,
    DeleteComponent,
    AllcustomerComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
