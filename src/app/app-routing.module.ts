import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NgforprodComponent } from './ngforprod/ngforprod.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'productList' , component:NgforprodComponent},
  {path:'addProduct' , component:EventsComponent},
  {path:'viewProduct/:id' , component:ViewProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
