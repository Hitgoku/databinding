import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NgforprodComponent } from './ngforprod/ngforprod.component';

const routes: Routes = [
  {path:'ng1' , component:NgforprodComponent},
  {path:'ng2' , component:EventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
