import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrickComponent } from './crick/crick.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EventsComponent } from './events/events.component';
import { NgforprodComponent } from './ngforprod/ngforprod.component';
import { PlayerComponent } from './player/player.component';
import { PlayerviewComponent } from './playerview/playerview.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  // {path:'productList' , component:NgforprodComponent},
  // {path:'addProduct' , component:EventsComponent},
  // {path:'viewProduct/:id' , component:ViewProductComponent},
  {path:'createPlayer' , component:CrickComponent},
  {path:'Playerlist' , component:PlayerComponent},
  {path:'viewPlayer/:playerId' , component:PlayerviewComponent},
  {path:'editPlayer/:playerId' , component:EditPlayerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
